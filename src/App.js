import './App.scss';
import React from 'react'
import {Container, Grid} from '@material-ui/core'
import Cards from './components/Card';
import Nav from './components/Nav'
import {makeStyles} from '@material-ui/core/styles'
import VerticalTab from './components/Tab';

const useStyles = makeStyles((theme) => ({
	grid: {
		padding: theme.spacing(3),
	},
	tabPadding: {
		padding: theme.spacing(3)
	},
	headerIndent: {
		marginLeft: '40px'
	}
}));



function App() {
	const classes = useStyles();
	
  return (
	<>
		<Nav/>
		<Container>
			<Grid  container className={classes.grid}>
				<Grid xs={4}>
					<Cards/>
				</Grid>
				<Grid xs={4}>
					<Cards/>
				</Grid>
				<Grid xs={4}>
					<Cards/>
				</Grid>
				<Grid xs={4}>
					<Cards/>
				</Grid>
				<Grid xs={4}>
					<Cards/>
				</Grid>
				<Grid xs={4}>
					<Cards/>
				</Grid>
			</Grid>
			<h1 className={classes.headerIndent}>TabComponent</h1>
			<VerticalTab className={classes.tabPadding}/>
		</Container>
	</>
  );
}

export default App;
