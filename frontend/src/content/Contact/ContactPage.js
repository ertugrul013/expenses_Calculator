import {InfoSection,InfoCard} from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

import React from 'react';

import {
  Breadcrumb,
  Button
} from 'carbon-components-react';

const ContactPage = () => {
  return(
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Contact us for any question
          </h1>
        </div>
      </div>
      <div class="bx--tile">
        <h2>sdsds</h2>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="Easy to use"
          body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
          icon={<PersonFavorite32/>}
          />

        <InfoCard
          heading="Fast and accurate"
          body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
          icon={<Application32/>}
          />
        <InfoCard
          heading="Consistent and reliable"
          body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
          icon={<Globe32/>}
          />
      </InfoSection>
    </div>
  );
};

export default ContactPage;
