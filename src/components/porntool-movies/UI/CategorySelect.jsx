function CategorySelect({name,active}) {
  return (
    <li className="nav-item" role="presentation">
    <a
      className={`nav-link ${active ? 'active' : ''}`}
      id="Trans-tab"
      data-toggle="tab"
      href="#Trans"
      role="tab"
      aria-controls="Trans"
      aria-selected="true"
    >
      {name}
    </a>
  </li>
  )
}

export default CategorySelect