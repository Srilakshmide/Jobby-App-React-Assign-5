import './index.css'

const SkillsCard = props => {
  const {skillsItem} = props
  const {name, imageUrl} = skillsItem

  return (
    <li className="skill-container">
      <img alt={name} className="skill-image" src={imageUrl} />
      <p className="skill-name">{name}</p>
    </li>
  )
}
export default SkillsCard
