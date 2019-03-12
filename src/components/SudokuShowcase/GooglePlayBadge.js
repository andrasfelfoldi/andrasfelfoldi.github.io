import React from 'react';

const GooglePlayBadge = (props) => {
    return (
        <div style={props.style}>
            <a href='https://play.google.com/store/apps/details?id=com.andrasfelfoldi.sdk&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width='50%'/>
            </a>
        </div>
    );
}
 
export default GooglePlayBadge;