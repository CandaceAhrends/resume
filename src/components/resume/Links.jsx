import React from 'react';
import Link from './Link';
import GitHubIcon from '/gitHub.svg';
import PDF from '/pdf.svg';
import Block from './Block';
import Website from '/website.svg';

const Links = () => {
  return (
    <Block title="Links">
      <div className="link-list">
        <Link href="http://www.stockmarketviz.com/">
          <img style={{ padding: '.3rem' }} src={Website}></img>
          <span>Stock Market Viz</span>
        </Link>
        <Link href="https://github.com/CandaceAhrends">
          <img src={GitHubIcon} alt="github"></img>
          <span>Github Profile</span>
        </Link>
        <Link href="/candaceahrends.pdf">
          <img src={PDF} alt="pdf"></img>
          <span>Resume (pdf)</span>
        </Link>
        <Link href="https://museum.newyorkfed.org/school/reserve">
          <img style={{ padding: '.3rem' }} src={Website}></img>
          <span>Gold Vault</span>
        </Link>
        <Link href="https://login.northwesternmutual.com/registration">
          <img style={{ padding: '.3rem' }} src={Website}></img>
          <span>Registration</span>
        </Link>
      </div>
    </Block>
  );
};

export default Links;
