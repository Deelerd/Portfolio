import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

import { FontS, FontM, FontXL } from '../../components/Font'
import { CoverGradient, ProfileImg, ProfileDetail, ProfileContent, IconContact, ContactIconContainer } from './profile.style'

import profile_img from '../../assets/images/profile.jpg'
import travel from '../../assets/images/travel.png'
import badminton from '../../assets/images/badminton.png'

const Profile = (props) => {
  let { store_language: { dictionary } } = props

  const contact = [{
    id: 'facebook',
    value: 'Facebook',
    icon: 'fab fa-facebook-square',
    icon_color: '#4266b2',
    href: 'https://www.facebook.com/deelerddee/'
  }, {
    id: 'line',
    value: 'Line',
    icon: 'fab fa-line',
    icon_color: '#24b904',
    href: 'http://line.me/ti/p/~deelerdkub'
  }, {
    id: 'email',
    value: 'Email',
    icon: 'fas fa-envelope-square',
    icon_color: '#d91f26',
    href: 'mailto:deelerdkub@gmail.com'
  }, {
    id: 'phone',
    value: 'Phone',
    icon: 'fas fa-phone-square-alt',
    icon_color: '#0094cc',
    href: 'tel:0845428595'
  }]

  const persional_profile = [{
    id: 'name',
    icon: 'fas fa-user',
    value: `${dictionary.first_name} ${dictionary.last_name}`,
  }, {
    id: 'birthday',
    icon: 'fas fa-birthday-cake',
    value: dictionary.my_birthday,
  }, {
    id: 'phone',
    icon: 'fas fa-phone-alt',
    value: dictionary.my_phone,
  }, {
    id: 'email',
    icon: 'fas fa-envelope',
    value: dictionary.my_email,
  }, {
    id: 'address',
    icon: 'fas fa-map-marker-alt',
    value: dictionary.my_address,
  }]

  const intereste_and_hobbies = [{
    id: 'computer',
    icon: 'fas fa-laptop',
    value: dictionary.computer,
  }, {
    id: 'book',
    icon: 'fas fa-book',
    value: dictionary.book,
  }, {
    id: 'music',
    icon: 'fas fa-music',
    value: dictionary.music,
  }, {
    id: 'camera',
    icon: 'fas fa-camera',
    value: dictionary.camera,
  }, {
    id: 'badminton',
    image: badminton,
    size: '20px',
    value: dictionary.badminton,
  }, {
    id: 'travel',
    image: travel,
    size: '20px',
    value: dictionary.travel,
  }]

  const skill = [
    { name: 'HTML/CSS', score: '8/10' },
    { name: 'ReactJS/Redux', score: '8/10' },
    { name: 'NodeJS', score: '6/10' },
    { name: 'SQL', score: '6/10' },
    { name: 'Firebase', score: '6/10' },
    { name: 'Grafana', score: '5/10' },
    { name: 'Microsoft Office', score: '8/10' }
  ]

  return <div>
    <CoverGradient>
      <ProfileImg src={profile_img} alt='profile' />
      <div className='w-100 h-100 d-flex align-items-center justify-content-center ' style={{ padding: '1rem 1rem 100px 1rem' }}>
        {
          contact.map((val) => {
            return <div className='d-flex align-items-center justify-content-center p-2' key={val.id}>
              <ContactIconContainer color={val.icon_color} onClick={() => window.open(val.href, '_blank')}>
                <IconContact className={val.icon} />
              </ContactIconContainer>
            </div>
          })
        }
      </div>
    </CoverGradient>
    <FontXL bold center className='my-2'>{`${dictionary.first_name.toUpperCase()} ${dictionary.last_name.toUpperCase()}`}</FontXL>
    <ProfileDetail className='pb-4'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.personal.toUpperCase()}</FontM>
              {
                persional_profile.map(val => {
                  return <FontM className='py-1' key={val.id}>
                    <i className={`${val.icon} fa-lg pr-2 text-center`} style={{ minWidth: '27px' }} />{val.value}
                  </FontM>
                })
              }
            </ProfileContent>
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.interests_and_hobbies.toUpperCase()}</FontM>
              {
                intereste_and_hobbies.map(val => {
                  return <FontM className='py-1 d-flex align-items-center' key={val.id}>
                    <div className='pr-2' style={{ minWidth: '32px', textAlign: 'center' }}>
                      {
                        val.icon
                          ? <i className={`${val.icon} fa-lg text-center`} style={{ color: '#000' }} />
                          : <img src={val.image} alt={val.id} width={val.size || '20px'} />
                      }
                    </div>
                    {val.value}
                  </FontM>
                })
              }
            </ProfileContent>
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.education.toUpperCase()}</FontM>
              <FontM>{dictionary.my_education}</FontM>
              <FontM>{dictionary.my_bachelor}</FontM>
              <FontM>{dictionary.my_gpa}</FontM>
            </ProfileContent>
          </div>
          <div className="col-sm-12 col-md-6 w-100 d-flex flex-column align-items-center">
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.skills.toUpperCase()}</FontM>
              {
                skill.map(val => {
                  return <div key={val.name} className='w-100 d-flex align-items-center justify-content-between'>
                    <FontM>{val.name}</FontM>
                    <FontM>{val.score}</FontM>
                  </div>
                })
              }
            </ProfileContent>
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.objective.toUpperCase()}</FontM>
              <FontM>
                <ul className="list-style-type:disc mb-0" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                  {
                    dictionary.my_objective.map((val, key) => {
                      return <li key={key}>{val}</li>
                    })
                  }
                </ul>
              </FontM>
            </ProfileContent>
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.qualification.toUpperCase()}</FontM>
              <FontM>
                <ul className="list-style-type:disc mb-0" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                  {
                    dictionary.my_qualification.map((val, key) => {
                      return <li key={key}>{val}</li>
                    })
                  }
                </ul>
              </FontM>
            </ProfileContent>
            <ProfileContent>
              <FontM bold orange className='mb-2'>{dictionary.job_interests.toUpperCase()}</FontM>
              <FontM>
                <ul className="list-style-type:disc mb-0" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                  {
                    dictionary.my_job_interests.map((val, key) => {
                      return <li key={key}>{val}</li>
                    })
                  }
                </ul>
              </FontM>
            </ProfileContent>
          </div>
          <div className="col-sm-12 w-100">
            <ProfileContent>
              <FontM bold orange>{dictionary.work_experience.toUpperCase()}</FontM>
              <FontM bold className='mb-2'>{`${dictionary.total_experience} : 2 ${dictionary.year}`}</FontM>
              {
                dictionary.my_experience.map((val, key) => {
                  return <div key={key} className='py-2 border-bottom'>
                    <FontM bold blue className='pb-1'>{val.company_name}</FontM>
                    <FontM bold>{dictionary.position}</FontM>
                    <FontS second>{val.position || '-'}</FontS>
                    <FontM bold>{dictionary.duration}</FontM>
                    <FontS second>{`${moment(val.start_date).format('DD MMM YYYY')} - ${moment(val.end_date).format('DD MMM YYYY')} `}</FontS>
                    <FontM bold>{dictionary.company_description}</FontM>
                    <FontS second>{val.company_description || '-'}</FontS>
                    <FontM bold>{`${dictionary.project} : ${val.project || '-'}`}</FontM>
                    <FontS second>{val.project_description || '-'}</FontS>
                    <FontM bold>{dictionary.responsibility}</FontM>
                    <FontS second>
                      {
                        <ul className="list-style-type:disc mb-0" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                          {val.responsibility.map((responsibility, key) => <li key={key}>{responsibility}</li>)}
                        </ul>
                      }
                    </FontS>
                    <FontM bold>{dictionary.success}</FontM>
                    <FontS second>
                      {
                        <ul className="list-style-type:disc mb-0" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                          {val.success.map((success, key) => <li key={key}>{success}</li>)}
                        </ul>
                      }
                    </FontS>
                    <FontM bold hidden={!val.reference || !val.reference.length}>{dictionary.reference}</FontM>
                    {
                      (val.reference && val.reference.length > 0)
                      && val.reference.map((reference, key) => {
                        return <FontS second key={key}>{`${reference.name} ${reference.contact ? `(${reference.contact})` : ''}`}</FontS>
                      })
                    }
                    <FontM bold hidden={!val.link_company || !val.link_company.length}>{dictionary.links}</FontM>
                    {
                      (val.link_company && val.link_company.length > 0)
                      && val.link_company.map((link_company, key) => {
                        return <FontS fit key={key} style={{ textDecoration: 'underline' }} link blue onClick={() => window.open(link_company, '_blank')}>{link_company}</FontS>
                      })
                    }
                  </div>
                })
              }
            </ProfileContent>
          </div>
        </div>
      </div>
    </ProfileDetail>
  </div>
}

const mapStateToProps = (state) => {
  return {
    store_language: state.language
  }
}

const mapDipatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(Profile);