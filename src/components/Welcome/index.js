import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const btnText = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button type="button" className="button" onClick={this.onSubscribe}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
