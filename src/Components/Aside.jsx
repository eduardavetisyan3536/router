import React from 'react'
import data from "../data.json";
import './aside.css'

const Aside = () => {
  function unique() {
    let brand = [];
  let category = []
    for (let str of data?.clothes) {
      if (!brand.includes(str.brand)) {
        brand.push(str.brand);
      }
      if (!category.includes(str.category)) {
        category.push(str.category);
      }
    }
  
    return {brand, category};
  }
  let el = unique()
  return (
    <div>
        <aside>
          <div className="asideThings">
            <div className="topName">
                <p>Filters</p>
            </div>
            <div className="brand fontAside">
                <p>Brand</p>
                <div className="BrandFilters">
                  {el.brand.map(item => {
                    return (
                      <p>
                      <input type="checkbox" />
                      <label for="scales">{item}</label>
                      </p>
                    )
                  })}
                </div>
            </div>
            <div className="category fontAside">
                <p>Category</p>
                <div className="categoryFilters">
                  {el.category.map(item => {
                    return (
                      <p>
                      <input type="checkbox" />
                      <label  for="scales">{item}</label>
                      </p>
                   
                      )
                    })}
                </div>
            </div>
          </div>
        </aside>
      </div>
  )
}

export default Aside

