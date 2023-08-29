import React from 'react'
import './data.css'

const DataSection = () => {
  return (
    <div>
      <div className="dataSection">
            <div className="dataFilters">
            <p>Collections</p>
            <select id="price" onChange={'handlechange'}>
                <option value="Default">Default</option>
                <option value="High">Price: High to Low</option>
                <option value="Low">Price: Low to High</option>
            </select>
            </div>
        </div>
    </div>
  )
}

export default DataSection
