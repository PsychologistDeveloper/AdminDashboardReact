import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { WithUseCollectionData } from 'Hoc/Firebase';
import { headers } from 'Utils/Csv/headers';

import CsvReportButtonComponent from 'Components/CsvReportButton/CsvReportButton.component';

export const CsvReportButtonContainer = (props) => {
  const [csvData, setCsvData] = useState(null);

  useEffect(() => {
    const { admins: { value } } = props;
    setCsvData(value);
  });

  return (
    <CsvReportButtonComponent
      headers={headers}
      data={csvData}
    />
  );
};

export default compose(WithUseCollectionData(['admins']))(CsvReportButtonContainer);
