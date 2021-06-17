import React, {useEffect,useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = (props) => {
  const data = props.data[0];
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setvisible(data.show)
  }, [props])

  return (
    <Snackbar open={visible} autoHideDuration={5000} onClose={() => setvisible(false)}>
        <Alert severity={data.type}>
          {data.text}
        </Alert>
    </Snackbar>
  )
}

export default Notification;
