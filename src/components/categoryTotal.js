export default function CategoryTotal({category}) {
  return (
    <div className="glass-box collapse-column">
       <h2>{category.icon}</h2>
      <div>
        <h3>{category.name}</h3>
        <p style={{textWrap:"nowrap"}}>$ {category.total}</p>
      </div>
     
    </div>
  )
}