import React from 'react'

function CoffeeTypes() {
  return (
    <div className='coffetypes'>
        <div className='collection'>
            <div className='collection_text'>
            <p>our collection</p>
            <div className='collection_shadow'>
                <img src='images/Rectangle.png' alt='.'/>
            </div>
        </div>
        </div>
        
        <div className='row'>
            <div className='col-3 type'>
                <img src='images/kopi1copy.png'/>
                <h3>Gran Espresso</h3>
                <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <div className='col-3 type'>
                <img src='images/kopi1copy.png'/>
                <h3>Planalto</h3>
                <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
            </div>
            <div className='col-3 type'>
                <img src='images/kopi1copy.png'/>
                <h3>Piccollo</h3>
                <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
            </div>
            <div className='col-3 type'>
                <img src='images/kopi1copy.png'/>
                <h3>Danche</h3>
                <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
            </div>
        </div>
    </div>
  )
}

export default CoffeeTypes