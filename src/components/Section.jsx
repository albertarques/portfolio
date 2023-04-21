export default function Section({id, title, children, className}) {
  if(className){
    return (
      <section id={id} className={[`${className} container px-5 m-3`]}>
        <h2 className='text-3xl m-3'>{title}</h2>
        {children}
      </section>
    )}
  return (
    <section id={id} className={["container px-5 m-3"]}>
      <h2 className='text-3xl m-3'>{title}</h2>
      {children}
    </section>
  )
}