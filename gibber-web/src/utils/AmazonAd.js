import React from 'react';
import createReactClass from 'create-react-class';

export const AmazonAd = createReactClass({
  amazonScript: function() {
    return `<div class="alignleft">
    <script type="text/javascript">
    amzn_assoc_ad_type = "banner";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
    amzn_assoc_placement = "assoc_banner_placement_default";
    amzn_assoc_campaigns = "primediscounted";
    amzn_assoc_banner_type = "category";
    amzn_assoc_isresponsive = "true";
    amzn_assoc_banner_id = "0AQQBV0CMTWYV943F002";
    amzn_assoc_tracking_id = "darpanypatel-20";
    amzn_assoc_linkid = "13f3072e2724a0b2774d7324283cf14b";
    </script>
    <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>
  </div>`
  },
  render: function() {
    return (
      <div >
        <div className='advertisement'>
          <div dangerouslySetInnerHTML={{__html: this.amazonScript()}}></div> 
        </div>
      </div>
    );
  }
});