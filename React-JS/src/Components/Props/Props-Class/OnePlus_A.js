import React from 'react'
import OnePlus_B from './OnePlus_B'

class OnePlus_A extends React.Component {

    Model = "One plus 6t"
    Storage = "256 GB "
    Price = "49,500/-"
    Display = "6.41 inches (16.28 cm) , Optic AMOLED , 60 Hz Refresh Rate"
    Performance = "Octa Core (2.8 GHz , Quad Core + 1.8 GHz , Quad core) , Snapdragon 845, 8 GB Storage"
    Camera = "16 MP + 20 MP Dual Primary Cameras , Dual LED Flash , 16 MP Front Camera"
    Battery = "3700 mAh, Dash Charging , USB : Type-C Port"

    render() {
        return <>
            <h1> ONE PLUS (+)</h1>
            <hr />
            <OnePlus_B
                Model={this.Model}
                Storage={this.Storage}
                Price={this.Price}
                Display={this.Display}
                Performance={this.Performance}
                Camera={this.Camera}
                Battery={this.Battery} />
        </>
    }
}

export default OnePlus_A