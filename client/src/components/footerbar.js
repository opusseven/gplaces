import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import centerFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  root: {
    width: 500,
    
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={{ backgroundColor: '#6EB1FF' }} value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Back" value="Back" icon={<ArrowBackIcon />} />
      <BottomNavigationAction label="Recents" value="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Forward" value="Forward" icon={<ArrowForwardIcon />} />
    </BottomNavigation>
  );
}
