
function SkillCard(props) {
    const {icon, title, desc} =props;
  return (
    <div className=' shadow-2xl w-96  p-4  border border-copper rounded-lg   mx-8 mt-6 bg-arsenic-primary  h-52'>
        <div className='  '> <img src={icon} alt='graphic-designer-icon' className='h-14  ' /></div>
        <p className='text-2xl  mt-2 justify-center text-left text-copper'>{title}</p>
        <p className='text-left text-white mt-2'>{desc}</p>
     </div>
  )
}

export default SkillCard