import React, { useEffect, useState } from 'react'
import { FontM, FontS } from '../../../components/Font'
import {
  WheelBox, Square, Triangle,
  Pointer, SpinButton, InnerSpin,
  WheelList, InputGame, ButtonAdd
} from './wheel.style'

const WheelGame = (props) => {
  let { store_language: { dictionary } } = props
  const [wheel, setWheel] = useState([{ value: '' }, { value: '' }, { value: '' }, { value: '' }])
  const [wheelLength, setWheelLength] = useState(0)
  const [stat, setStat] = useState(1)
  const [rotateDegree, setRotateDegree] = useState('0')
  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const color = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9']
  const min_piece = 3
  const max_piece = 10
  let size = 300
  let angle_per_section = (360 / (wheel.length || 1))
  let tan_angle = Math.tan((angle_per_section / 2) * Math.PI / 180) // tan(มุมของสามเหลี่ยมมุมฉาก)

  useEffect(() => {
    let gen_wheel = wheel.map((val, key, arr) => {
      let area = []
      let number_section = arr.length
      let angle_per_section = 360 / number_section
      let half_angle = angle_per_section / 2

      area.push({
        min: key === 0 ? 0 : half_angle + ((key - 1) * angle_per_section),
        max: half_angle + (key * angle_per_section)
      })

      if (key === 0)
        area.push({ min: 360 - half_angle, max: 360 })

      return Object.assign({}, { id: key + 1, value: val.value, area: area })
    })

    setWheel(gen_wheel)
    setWheelLength(gen_wheel.length)
    // eslint-disable-next-line
  }, [wheelLength])

  const handleChange = ({ target: { name, value } }) => {
    value = value.trim()
    setWheel(wheel.map((val) => Object.assign({}, val, { value: parseInt(val.id) === parseInt(name) ? value : val.value })))
    resetResult()
  }

  const addSectionWheel = () => {
    let add = [...wheel, { value: '' }]
    setWheel(add)
    setWheelLength(add.length)
    resetResult()
  }

  const removeSectionWheel = (id) => {
    let remove = wheel.filter(f => parseInt(f.id) !== parseInt(id))
    setWheel(remove)
    setWheelLength(remove.length)
    resetResult()
  }

  const spinWheel = () => {
    resetResult()

    if (wheel.filter(f => !f.value).length > 0)
      return setError('error_value_wheel')
    else
      setError('')

    setLoading(true)
    let min = 0;
    let max = 360;
    let round = 3600;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;   // random 0-360
    let luckyNum = ignoredegree(randomNum) // ไม่ให้ random ลงขอบ
    let statDegree = round * stat;  // เพิ่มมุมทุกครั้งที่กดเพื่อไมให้มุมหมุนกลับ
    let resultDegree = statDegree + luckyNum;
    let result_id = ''

    for (let index = 0; index < wheel.length; index++) {
      const element = wheel[index];
      if (luckyNum === 0 || luckyNum === 360) {
        result_id = element.id
        break;
      } else if (element.area.filter(f => between(luckyNum, f.min, f.max)).length > 0) {
        result_id = element.id
        break;
      }
    }

    setStat(stat + 1)
    setRotateDegree(resultDegree.toString())
    setTimeout(() => {
      setResult(result_id)
      setLoading(false)
    }, 10000)
  }

  const between = (val, min, max) => (val > min && val < max)

  const ignoredegree = (luckyNum) => {
    let ignoredegree = []
    wheel.forEach((val) => { return val.area.forEach((v) => { return (v.max !== 360 && v.max !== 0) && ignoredegree.push(v.max) }) })
    if (ignoredegree && ignoredegree.indexOf(luckyNum) > -1) luckyNum++;
    return luckyNum
  }

  const resetResult = () => result ? setResult('') : null

  return <div className='w-100'>
    <div className='card'>
      <div className='card-header'>
        <FontM bold>{dictionary.wheel_game.toUpperCase()}</FontM>
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='w-100 col-sm-12 col-md-6 mb-2 d-flex flex-column align-items-center justify-content-center'>
            <WheelBox className='my-3'>
              <Square rotateDegree={rotateDegree} size={`${size}px`}>
                {
                  wheel.map((val, key) => {
                    return <Triangle
                      key={`${key}`}
                      section={key + 1}
                      tan_angle={tan_angle}
                      size={`${size / 2}px`}
                      rotate_angle={key * -angle_per_section}
                      color={color[key]}>
                      <div>{key + 1}</div>
                    </Triangle>
                  })
                }
              </Square>
              <Pointer className="fas fa-map-marker" />
              <SpinButton size={`${(size / 5)}px`} onClick={!isLoading ? spinWheel : null}>
                <InnerSpin size={`${(size / 5) - 10}px`}>SPIN</InnerSpin>
              </SpinButton>
            </WheelBox>
            {error && <FontM red center>{dictionary[error]}</FontM>}
          </div>
          <div className='w-100 col-sm-12 col-md-6 mb-2'>
            <FontM bold className='mb-1'>{dictionary.set_random_value}</FontM>
            <FontS second className='mb-2'>
              {`${dictionary.min_piece_wheel} ${min_piece} ${dictionary.piece} ${dictionary.max_piece_wheel} ${max_piece} ${dictionary.piece}`}
            </FontS>
            {
              wheel.map((val, key) => {
                return <WheelList
                  key={key}
                  isResult={result && parseInt(result) === parseInt(val.id)}
                  fade={result && parseInt(result) !== parseInt(val.id)}
                  className='d-flex align-items-center justify-content-center'>
                  <FontM bold className='pr-1 py-2' style={{ minWidth: 30 }}>{key + 1}</FontM>
                  <InputGame
                    type="text"
                    name={val.id}
                    onChange={handleChange}
                    background={color[key]}
                    placeholder={dictionary.random_value}
                    value={val.value || ''}
                    disabled={isLoading} />
                  <div style={(wheel.length <= min_piece || isLoading) ? { visibility: 'hidden' } : null}>
                    <FontM bold link red className='pl-3 py-2' onClick={() => (!isLoading && wheel.length > min_piece) ? removeSectionWheel(val.id) : null}>
                      <i className="fas fa-times" />
                    </FontM>
                  </div>
                </WheelList>
              })
            }
            <div className='w-100 text-left pt-2' hidden={isLoading || wheel.length >= max_piece}>
              <ButtonAdd disabled={isLoading} onClick={addSectionWheel}>
                <i className="fas fa-plus pr-2" /> {dictionary.add_piece_wheel}
              </ButtonAdd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default WheelGame;