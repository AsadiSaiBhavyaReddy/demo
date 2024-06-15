import React from 'react';
import Typography from '@mui/material/Typography';

const AppointmentDetails = ({ appointmentDetails }) => {
  return (
    <div style={{ maxWidth: '900px', margin: 'auto', backgroundColor: 'white', padding: '50px' }}>
      <Typography variant="h5" gutterBottom style={{ color: '' }}>
        Appointment Details
      </Typography>
      <table style={{ width: '150%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead style={{ borderBottom: '2px solid #ddd' }}>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left' }}>Field</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(appointmentDetails).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</strong>
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{key === 'fileName' ? value : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDetails;
