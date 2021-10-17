import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

function TabPanel(props) {
	const classes = useStyles();

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography className={classes.tabPanelText}
	  >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Style funcs
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanelText: {
	  fontSize: 14
  }
}));

function a11yProps(index) {
	return {
	  id: `vertical-tab-${index}`,
	  'aria-controls': `vertical-tabpanel-${index}`,
	};
}

// End of style funcs

export default function VerticalTab() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="React" {...a11yProps(0)} />
        <Tab label="Angular" {...a11yProps(1)} />
        <Tab label="Vue" {...a11yProps(2)} />
        <Tab label="Symfony" {...a11yProps(3)} />
        <Tab label="PHP" {...a11yProps(4)} />
        <Tab label="Laravel" {...a11yProps(5)} />
        <Tab label="JavaScript" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
		React is a JavaScript library for building user interfaces.<br></br>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.<br></br> Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.<br></br>
      These Angular docs help you learn and use the Angular framework and development platform,<br></br> from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Vue is a progressive framework for building user interfaces.<br></br> Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.<br></br> The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.<br></br> On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
      </TabPanel>
      <TabPanel value={value} index={3}>
      Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.
      </TabPanel>
      <TabPanel value={value} index={4}>
	  PHP is a popular general-purpose scripting language that is especially suited to web development.<br></br>
		Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.	
      </TabPanel>
      <TabPanel value={value} index={5}>
      Laravel is a web application framework with expressive, elegant syntax.<br></br> We’ve already laid the foundation — freeing you to create without sweating the small things.
      </TabPanel>
      <TabPanel value={value} index={6}>
	  JavaScript is an interpreted programming language that conforms to the ECMAScript specification.<br></br> JavaScript is high-level, often just-in-time compiled, and multi-paradigm.<br></br> It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.<br></br> In this path you will learn the basics of JavaScript as well as more advanced topics such as promises, asynchronous programming, proxies and reflection.
      </TabPanel>
    </div>
  );
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};