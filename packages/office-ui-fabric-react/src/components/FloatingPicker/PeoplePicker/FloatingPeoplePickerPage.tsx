import * as React from 'react';
import { FloatingPeoplePickerTypesExample } from '../PeoplePicker/examples/FloatingPeoplePicker.Basic.Example';

import { DemoPage } from '../../../demo/components/DemoPage';
import { IDemoPageProps } from '../../../demo/components/DemoPage.types';

const FloatingPeoplePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/examples/FloatingPeoplePicker.Basic.Example.tsx') as string;
export const FloatingPeoplePickerPageProps: IDemoPageProps = {
  title: 'FloatingPeoplePicker',
  componentName: 'FloatingPeoplePicker',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/FloatingPeoplePicker',
  examples: [
    {
      title: 'Floating People Picker',
      code: FloatingPeoplePickerBasicExampleCode,
      view: <FloatingPeoplePickerTypesExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/BaseFloatingPicker.types.ts')
  ],
  overview: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerBestPractices.md'),
  dos: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerDos.md'),
  donts: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerDonts.md'),
  isHeaderVisible: true
};

export const FloatingPeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage {...{ ...FloatingPeoplePickerPageProps, ...props }} />
);
