import './App.css';
// import BillzTable from './Components/BillzTable';
import BillzDataTableContainer from './containers/BillzDataTableContainer';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import { favoriteAction } from "./services/actions/favoriteAction";
import { unfavoriteAction } from "./services/actions/unfavoriteAction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h2" component="h2" align='left' color='white'>
          BILLZ
      </Typography>;
      </header>
      {/* <BillzTable></BillzTable> */}
      <BillzDataTableContainer></BillzDataTableContainer>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  favoriteAction: () => dispatch(favoriteAction),
  unfavoriteAction: () => dispatch(unfavoriteAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
