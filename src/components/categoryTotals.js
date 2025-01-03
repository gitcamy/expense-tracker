import CategoryTotal from './categoryTotal';
export default function CategoryTotals({ categories }) {
  return (
    <div className="category-box-container">
      {categories.map((category) => (<CategoryTotal key={category.id} category={category}/>))}
    </div>
  )
}