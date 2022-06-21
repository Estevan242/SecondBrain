
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import './Home.css'
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import appointments from '../demo-data/today-appointments';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];
function Home (){
  return (
    <Paper>
    <Scheduler data={appointments} height={660}>
      <WeekView startDayHour={9} endDayHour={19} />
      <Appointments />
    </Scheduler>
  </Paper>
  );
}
export default Home;