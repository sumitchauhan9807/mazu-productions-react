import React from 'react';

const ImprintPage = () => {
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center'>
      <h1 className='text-gray-800'>Imprint</h1>
      <p>
        Dialogmakers International Ltd. <br />
        2F, No. 2-1, Lane 23, Wenhua Street <br />
        Pingzhen District, Taoyuan City, 324 Taiwan <br />
        Register: 83273694 <br />
        Email: support@dialogmaxx.com <br />
        Internet: <a href="https://dialogmaxx.com">https://dialogmaxx.com</a>
      </p>

      <h2>General Terms and Conditions</h2>
      <p>
        You can find our <a href="/terms">General Terms and Conditions here</a>.
      </p>

      <h2>Liability</h2>
      <p>
        In the court decision, 312 O 85/98 - 'Liability for links' from 12 May 1998 the county court in Hamburg resolved that, should links be included on a website, then the requisite site is thereby responsible for the content displayed on the linked site. To prevent this liability, it is necessary to expressly disassociate oneself from this content of these links. For this reason we, hereby, wish to ascertain, that we most decidedly do not endorse the content on these linked sites. This disclaimer applies to all links which appear on our website and to the complete content of these websites; including those underlying the displayed banners. These services contain links to other internet sites, to resources and to other users of those services. With this disclaimer we would like to state that we are also not in any way responsible for the availability of the external resources, or for their content; for the content of which we do not necessarily approve. In addition, we claim no responsibility for the advertising content, the products or for other matters which appear on these websites.
      </p>
      {/* ... (Continue with the rest of the liability information) */}

      <p>
        All rights, including those concerning the duplication of materials, copyright, publication and translation, are reserved. None of the materials publicised may be duplicated in any form (as photocopies, microfilms or used within other processes) without the written permission of the author; this includes duplication or distribution by electronic means.
      </p>
    </div>
  );
};

export default ImprintPage;
