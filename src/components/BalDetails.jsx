import React from 'react'
import data from '../util/data.json'
import Bar from '../components/Bar'
import '../styles/BalDetails.css'


const BalDetails = () => {

    const track = data.map((exp, index) => 
        <Bar 
            day={exp.day} 
            amt={exp.amount} 
            key={`${exp.amount}-${index}`} 
        />
    )

  return (
    <div className="details pi-2r">
        <h1 className="title">
            Spending - Last 7 days
        </h1>

        <section className="histogram">
            {track}
        </section>

        <section className="details_footer">
            <h1 className="footer_title">
                Total this month
            </h1>
            <div className="bal_detail">
                <p className="bal">
                    $478.33
                </p>
                <div className="rate">
                    <span className="bold">
                        +2.4%
                    </span>
                    from last month
                </div>
            </div>
        </section>
    </div>
  )
}

export default BalDetails