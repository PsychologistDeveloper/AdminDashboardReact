/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import WithUseDBData from 'Hoc/Firebase';
import { headers } from 'Utils/Csv/headers';

import CsvReportButtonComponent from 'Components/CsvReportButton/CsvReportButton.component';

export const CsvReportButtonContainer = (props) => {
  const [csvData, setCsvData] = useState(null);

  // useEffect(() => {
  //   const { admins: { value } } = props;
  //   setCsvData(value);
  // });

  return (
    <CsvReportButtonComponent
      headers={headers}
      data={csvData}
    />
  );
};

// export default compose(WithUseDBData(['admins']))(CsvReportButtonContainer);
export default CsvReportButtonContainer;
