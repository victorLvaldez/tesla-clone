import React from 'react'
import styled from 'styled-components'
import Section from '../Section/Section'

// Components

const models = [
    {
        "id": 0,
        "title": "Model S",
        "description": "Order Online for Touchless Delivery",
        "image": "model-s.jpg",
        "leftButton": "Custom order",
        "rightButton": "Existing  inventory",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    },
    {
        "id": 1,
        "title": "Model 3",
        "description": "Order Online for Touchless Delivery",
        "image": "model-3.jpg",
        "leftButton": "Custom order",
        "rightButton": "Existing  inventory",
        "range": "400",
        "time": "2.99",
        "topSpeed": "180",
        "peakPower": "900"
    },
    {
        "id": 2,
        "title": "Model X",
        "description": "Order Online for Touchless Delivery",
        "image": "model-x.jpg",
        "leftButton": "Custom order",
        "rightButton": "Existing  inventory",
        "range": "350",
        "time": "1.55",
        "topSpeed": "150",
        "peakPower": "1,130"
    },
    {
        "id": 3,
        "title": "Model Y",
        "description": "Order Online for Touchless Delivery",
        "image": "model-y.jpg",
        "leftButton": "Custom order",
        "rightButton": "Existing  inventory",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    },
    {
        "id": 4,
        "title": "Lowest Cost Solar Panels in America",
        "description": "Money-back guarantee",
        "image": "solar-panel.jpg",
        "leftButton": "Order now",
        "rightButton": "Learn More",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    },
    {
        "id": 5,
        "title": "Solar for New Roofs",
        "description": "Solar Roof Cost Less Than a New Roof Plus Solar Panels",
        "image": "solar-roof.jpg",
        "leftButton": "Order now",
        "rightButton": "Learn More",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    },
    {
        "id": 6,
        "title": "Accessories",
        "description": "",
        "image": "accessories.jpg",
        "leftButton": "Shop now",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    }
]

function Home() {
    return (
        <Container>

            {
                models.map((item) => {
                    return (
                        <Section
                            key={item.id}
                            title={item?.title}
                            description={item?.description}
                            backgroundImg={item?.image}
                            leftBtnText={item?.leftButton}
                            rightBtnText={item?.rightButton}
                        />
                    )
                })
            }
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`