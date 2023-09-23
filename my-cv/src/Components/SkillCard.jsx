
function SkillCard(props) {
    const {icon, title, desc} =props;
  return (
    <div className=' shadow-2xl w-72  p-4  border border-copper rounded-lg flex-row justify-evenly mx-8 mt-6 bg-arsenic-primary  h-52'>
        <div className='  '> <img src={props.icon} alt='graphic-designer-icon' className='h-14  ' /></div>
        <p className='text-lg  mt-2 justify-center text-left text-copper'>{props.title}</p>
        <p className='text-left text-white mt-2'>{props.desc}</p>
     </div>
  )
}

export default SkillCard