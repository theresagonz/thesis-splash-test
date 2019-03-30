'use strict';
import NavBar from './src/components/navbar.js';
// import Welcome from './src/components/welcome';
// import OurServices from './src/components/our-services';
// import Footer from './src/components/footer';

class Main extends React.Component {
  render() {
    console.log('in main')
    return (
      <div>
        <NavBar />
        {/* <Welcome />
        <OurServices />
        <Footer /> */}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Main />, domContainer);
