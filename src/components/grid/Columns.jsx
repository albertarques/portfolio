export default function Columns({cols, gap, children, className}) {
  if(className === true){
    return (
      <div className={` ${className} grid grid-cols-1 lg:grid-cols-${cols} gap-${gap}`}>
        {children}
      </div>
    )  
  } else {
    return (
    <div className={[`grid grid-cols-1 lg:grid-cols-${cols} gap-${gap}`]}>
      {children}
    </div>
  )}
}
