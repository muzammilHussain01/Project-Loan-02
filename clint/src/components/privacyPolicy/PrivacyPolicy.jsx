import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import privacyPolicy from "../img/privacyPolicy.png";
import Footer from "../footer/Footer";
import MoveToTop from "../moveToTop/MoveToTop";
const PrivacyPolicy = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${privacyPolicy})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
          height: "50vh",
          marginTop: "50px",
        }}
        className="bg-primary"
      >
        <Container>
          <Row>
            <Col lg={8}></Col>
            <Col lg={4}>
              <h1 className="text-white pt-5 text-warning">
                Privacy <span className="text-warning">Policy</span>{" "}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <p className="text-center fs-1 text-primary">Privacy Policy</p>
              <p>
                This privacy policy ("Policy") forms a binding contract between
                you and Rupeezo including its subsidiaries, group companies and
                affiliates ("Rupeezo").
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                AN IMPORTANT NOTICE FOR INDIVIDUALS WITHIN THE EUROPEAN UNION
              </p>
              <p>
                The General Data Protection Regulation (GDPR) is a regulation in
                European Union law on data protection and privacy for all
                individuals within the European Union (EU) and the European
                Economic Area (EEA). The GDPR applies to an organisation if it
                collects data from EU residents or processes such data. We are
                not involved in either collecting data from EU residents or in
                processing such data. We do not offer our products or services
                within the EU and the EEA.{" "}
                <strong>
                  {" "}
                  As such, we are not required to conform to the stipulations of
                  the GDPR.
                </strong>{" "}
                Therefore, while we endeavour to implement world-class privacy
                norms, we do not actively seek compliance with the GDPR. If you
                are an EU citizen, please be advised that by using this Website
                or transacting with us, you waive all and any entitlement that
                may otherwise be available to you under the GDPR. We disclaim
                any liability to ascertain the applicability of GDPR to you
                and/or to seek your consent of such waiver separately.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                AN IMPORTANT NOTICE FOR CALIFORNIA RESIDENTS
              </p>
              <p>
                The California Consumer Privacy Act (CCPA) is a regulation that
                is intended to enhance privacy rights and consumer protection
                for residents of California, United States. The CCPA provides
                certain rights to California residents with respect to their
                personal data. The CCPA applies to a business that collects
                consumers' personal data, which does business in California, and
                satisfies certain financial thresholds. We are not involved in
                either collecting data from California residents or in doing
                business in California. We do not offer our products or services
                within California.{" "}
                <strong>
                  {" "}
                  As such, we are not required to conform to the stipulations of
                  the CCPA. Therefore, while we endeavour to implement
                  world-class privacy norms, we do not actively seek compliance
                  with the CCPA. If you are a California resident, please be
                  advised that by using this Website or transacting with us, you
                  waive all and any entitlement that may otherwise be available
                  to you under the CCPA. We disclaim any liability to ascertain
                  the applicability of CCPA to you and/or to seek your consent
                  of such waiver separately.
                </strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">CONTENTS </p>
              <ul>
                <li>TERMS USED IN THIS POLICY</li>
                <li>ABOUT THIS POLICY</li>
                <li>OUR COMMITMENT TOWARDS PROTECTING PERSONAL INFORMATION</li>
                <li>
                  WHAT DATA DO WE COLLECT OR PROCESS ABOUT YOU, AND FOR WHAT
                  PURPOSE?
                </li>
                <li>WHOM DO WE SHARE YOUR DATA WITH?</li>
                <li>WHERE DO WE PROCESS YOUR DATA?</li>
                <li>HOW LONG DO WE RETAIN YOUR DATA?</li>
                <li>WHAT ARE YOUR RIGHTS REGARDING YOUR DATA WITH US?</li>
                <li>HOW DO WE USE COOKIES?</li>
                <li>SECURITY OF YOUR DATA</li>
                <li>LINK TO OTHER WEBSITES</li>
                <li>COMMUNICATIONS, ETC.</li>
                <li>LIMITATION OF LIABILITY</li>
                <li>DERIVATIVE DATA</li>
                <li>CHANGES TO THIS PRIVACY POLICY</li>
                <li>CONTACT DETAILS</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">TERMS USED IN THIS POLICY </p>
              <ul>
                <li>
                  Cookies” mean small files that are placed on your computer,
                  mobile device or any other device by a website, containing,
                  among other information, the details of your browsing history
                  on that website.
                </li>
              </ul>{" "}
              <ul>
                <li>
                  “Personal Data” means any information relating to an
                  identified or identifiable natural person.
                </li>
              </ul>{" "}
              <ul>
                <li>“Policy” means this Privacy Policy.</li>
              </ul>{" "}
              <ul>
                <li>
                  “Service” means a service that we provide for a fee or gratis.
                  You are using our Service when you sign up or sign in to get
                  access to any Service provided by us..
                </li>
              </ul>{" "}
              <ul>
                <li>
                  “we”, “us”, “our”, and “Rupeezo” refer to Gigs Fintech Pvt
                  Ltd.
                </li>
              </ul>{" "}
              <ul>
                <li>
                  “Rupeezo Platform” means the set of proprietary APIs, SDKs,
                  tools, plugins, code, technology, content, and services that
                  are made available over the https://rupeezo.in/and includes
                  the microsites created therefrom (including microsites created
                  on third-party websites).
                </li>
              </ul>{" "}
              <ul>
                <li>
                  "you" refers to you, as a visitor to the Website, as a user or
                  subscriber of the Services.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p className=" fs-4 text-primary">ABOUT THIS POLICY</p>
              <p>
                {" "}
                We understand the importance of data and its privacy. This
                Policy explains the type of information we collect, how we
                handle your information and comply with the requirements of
                applicable privacy laws. All your transactions over the Rupeezo
                Platform will be covered by the terms of this Privacy Policy.
              </p>
              <p>
                This Privacy Policy is applicable to any person who visits,
                inquiries or avails our Services using the Rupeezo Platform
                whether using the Rupeezo Platform/ application. You may take
                note that information and privacy practices of our business
                partners, advertisers, sponsors or other sites to which we
                provide hyperlink(s), may be materially different from this
                privacy policy. We recommended that you review the privacy
                statements and policies of any such third parties with whom they
                interact. We do not make any representations concerning the
                privacy practices or policies of such third parties or terms of
                use of such websites, nor do we guarantee the accuracy,
                integrity, or quality of the information and content available
                on such websites. Their inclusion or exclusion on the Rupeezo
                Platform does not imply our endorsement.
              </p>
              <p>
                This Policy is implemented in conjunction with the Terms of Use
                as available on https://rupeezo.in/ and the terms thereof are
                deemed to be included in this Policy by reference. By using our
                Services and/or Website, you expressly consent to the terms of
                this Policy including the terms with respect to the collection,
                retention, procession, storage, sharing of your data and
                personal information.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">ABOUT THIS POLICY</p>
              <p>
                Your privacy is important to us. We will use your personal
                information only in the manner set out in this Policy. We are
                committed to safeguarding the privacy of our website visitors,
                clients, prospects, and other third-parties. This Policy sets
                out how we deal with your personal information.
              </p>
              <p>
                Our commitment towards protecting your personal information
                includes the following obligations:
              </p>
              <ul>
                <li>
                  We promise to protect your privacy and treat the information
                  you give us as confidential.
                </li>
                <li>
                  The information you provide to us will be used by us only for
                  the purpose for which it was sought.
                </li>
                <li>We will never sell your personal data to anyone.</li>
                <li>
                  Your decision to provide or not to provide any information
                  will respected without question.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                WHAT DATA DO WE COLLECT OR PROCESS ABOUT YOU, AND FOR WHAT
                PURPOSE?
              </p>
              <p>
                We collect information, including personal data, about you to be
                able to make the Rupeezo Platform and Services useful to you. We
                use this information to undertake and accounts your
                creditworthiness which in turn may enable you to make
                applications for one or more credit facilities (“each
                “Application for Credit”) to credit providing financial
                institutions/ partners affiliated with Rupeezo. Each of the
                credit worthiness assessment and the application for a credit
                facility form part of the Services offered by us. We also
                provide risk evaluation and management services to financial
                institutions/ partners affiliated with Rupeezo. Our Services
                also rely on other factors such as the limit of credit facility
                (“Credit Limit”) sought and other parameters including credit
                eligibility requirement set out by the financial institutions/
                partners affiliated with Rupeezo. We use the information
                available on the Rupeezo Platform for providing such Services.
              </p>
              <p>
                This information may be collected by us from the data which you
                give to us while using our Services or using the Rupeezo
                Platform. We collect information from you at the time of account
                creation and on on-going basis to create and update your
                profiles to determine the manner in which you can avail our
                Services. We may also derive your information from other
                sources. Such information may, inter alia, include the
                following:
              </p>
              <ul>
                <li>
                  Your personal identifiable information including your
                  demographic details (such as your name, gender, marital
                  status, age), contact details (such as your email address,
                  postal addresses, telephone number);
                </li>
                <li>
                  Your financial information including banking details (such as
                  your credit/debit card details, wallet information, bank
                  account no., bank, branch, IFSC), your fiscal details (such as
                  your income, expenses);
                </li>
                <li>
                  Your technical information collected by our technology (such
                  as your browser type, operating system, Internet Protocol (IP)
                  address);
                </li>
                <li>
                  Your usage and preference information to assign you with
                  unique identifiers to enable us to identity you while you use
                  our Services;
                </li>
                <li>
                  Information voluntarily provided by you while using our
                  Services (such as engaging with third-parties over the Rupeezo
                  Platform);
                </li>
                <li>
                  Information generated while you transact on Rupeezo Platform;
                </li>
                <li>
                  Security-related information used by you while accessing the
                  Rupeezo Platform (such as usernames, passwords, email
                  addresses)
                </li>
                <li>
                  Information which you store on our servers (such as images,
                  documents);
                </li>
                <li>
                  Information available in the public domain, including over
                  social media platforms (such as your picture, etc.);
                </li>
                <li>
                  Information pertaining to any other person in respect of whom
                  you make disclosures through the Rupeezo Platform or while
                  using our Services (such as a nominee). In such case, you must
                  confirm and represent that each of the other investor(s) for
                  whom an enquiry/ transaction has been made, has agreed to have
                  the information shared by you, disclosed to us and further be
                  shared by us with our business partners.
                </li>
              </ul>
              <p>
                {" "}
                By using our Services, you authorise us and/or partners
                affiliated with us to obtain your credit report from Credit
                Bureau or any other agencies authorised by the Reserve Bank of
                India in this behalf that hold credit history or related
                information and also give us and/or partners affiliated with us
                the right to use your credit report, social media profile/
                content, cell phone data and employment data for authentication,
                credit scoring, credit decision purposes or such other
                legitimate use.
              </p>
              <p>
                We may process the data that we have about you, in the following
                manner.
              </p>
              <ul>
                <li>
                  We may process data about your use of our website and services
                  (“usage data”). The usage data may include your IP address,
                  geographical location, browser type and version, operating
                  system, referral source, length of your visit, page views and
                  website navigation paths, as well as information about the
                  timing, frequency and pattern of your Service use. The source
                  of the usage data is our analytics tracking system. In
                  addition, we may use third-party analytics tracking services
                  such as Google Analytics and Facebook Pixel. This usage data
                  may be processed for the purposes of analysing the use of the
                  Website and Services in order to improve our performance
                  metrices, and for communicating with you. The legal basis for
                  this processing is your consent. In some cases, the legal
                  basis for this processing is our legitimate interests, namely
                  monitoring and improving our Website and Services.
                </li>
                <li>
                  We may process your data that is provided to us during the
                  course of you taking assessments on our Website (“response
                  data”). The response data may include your name, age, and your
                  responses to the questions that we may ask you/ documents
                  submitted by you. The source of the response data is you. The
                  response data may be processed for the purposes of providing
                  our services, ensuring the integrity of our operations and
                  processes, maintaining back-ups of our databases, and for
                  communicating with you. The legal basis for this processing is
                  your consent.
                </li>
                <li>
                  We may process your information included in your personal
                  profile on our website (“profile data”). The profile data may
                  include your name, address, telephone number, email address,
                  profile pictures, gender, date of birth, relationship status,
                  interests and hobbies, educational details, bank account
                  details, broking account details, and demat account details.
                  The profile data may be processed for the purposes of enabling
                  and monitoring your use of our website and services, for
                  providing Services to you, and for communicating with you. The
                  legal basis for this processing is your consent. In some
                  cases, the legal basis for this processing is our legitimate
                  interests, namely the proper administration and operation of
                  our Website and Services.
                </li>
                <li>
                  We may process your personal data that are provided in the
                  course of the use of our Services (“service data”). The
                  service data may include your name, address, telephone number,
                  email address, bank account details, broking account details,
                  and demat account details. The source of the service data is
                  you. The service data may be processed for the purposes of
                  providing our Services, ensuring the security of our Website
                  and Services, maintaining back-ups of our databases, and for
                  communicating with you. The legal basis for this processing is
                  your consent. In some cases, the legal basis for this
                  processing is our legitimate interests, namely the proper
                  administration of our Website and business. In some cases, the
                  legal basis for this processing is the performance of a
                  contract between you and us and/or taking steps, at your
                  request, to enter into such a contract.
                </li>
                <li>
                  We may process information that you post for publication on
                  our Website or through our Services (“publication data”). The
                  publication data may be processed for the purposes of enabling
                  such publication and administering our Website and Services.
                  The legal basis for this processing is your consent. In some
                  cases, the legal basis for this processing is our legitimate
                  interests, namely the proper administration of our Website and
                  business. In some cases, the legal basis for this processing
                  is the performance of a contract between you and us and/or
                  taking steps, at your request, to enter into such a contract.
                </li>
                <li>
                  We may process information contained in any enquiry you submit
                  to us regarding our Services (“enquiry data”). The enquiry
                  data may be processed for the purposes of offering, marketing
                  and selling relevant goods and/or services to you and for and
                  for communicating with you. The legal basis for this
                  processing is your consent.
                </li>
                <li>
                  We may process information relating to our customer
                  relationships, including customer contact information
                  (“customer relationship data”). The customer relationship data
                  may include your name, your job title or role, your contact
                  details, and information contained in communications between
                  us and you or your employer. The source of the customer
                  relationship data is you or your employer. The customer
                  relationship data may be processed for the purposes of
                  managing our relationships with customers, communicating with
                  customers, keeping records of those communications, promoting
                  our products and services to customers, and for communicating
                  with you. The legal basis for this processing is your consent.
                  In some cases, the legal basis for this processing is our
                  legitimate interests, namely the proper administration of our
                  Website and business. In some cases, the legal basis for this
                  processing is the performance of a contract between you and us
                  and/or taking steps, at your request, to enter into such a
                  contract.
                </li>
                <li>
                  We may process information relating to transactions, including
                  purchases of goods and services, that you enter into with us
                  and/or through our Website (“transaction data”). The
                  transaction data may include your contact details, your
                  banking details, your credit card details, bank account
                  details, and the details of the transactions carried out by
                  you. The transaction data may be processed for the purpose of
                  providing Services, keeping proper records of those
                  transactions, and for communicating with you. The legal basis
                  for this processing is your consent. In some cases, the legal
                  basis for this processing is our legitimate interests, namely
                  the proper administration of our business. In some cases, the
                  legal basis for this processing is the performance of a
                  contract between you and us and/or taking steps, at your
                  request, to enter into such a contract.
                </li>
                <li>
                  We may process information that you provide to us for the
                  purpose of subscribing to our email notifications and/or
                  newsletters (“notification data”). The notification data may
                  be processed for the purposes of sending you the relevant
                  notifications and/or newsletters, and for communicating with
                  you. The legal basis for this processing is your consent.
                </li>
                <li>
                  We may process information contained in or relating to any
                  communication that you send to us (“correspondence data”). The
                  correspondence data may include the communication content and
                  metadata associated with the communication. Our website will
                  generate the metadata associated with communications made
                  using the website contact forms. The correspondence data may
                  be processed for the purposes of communicating with you and
                  record-keeping. The legal basis for this processing is your
                  consent. In some cases, the legal basis for this processing is
                  our legitimate interests, namely the proper administration of
                  our Website and business and communications with our business
                  counterparts.
                </li>
              </ul>
              <p>
                In addition to the specific purposes for which we may process
                your personal data set out in this Section, we may process any
                of your personal data identified in this Policy where necessary
                for:
              </p>
              <ul>
                <li>
                  the establishment, exercise or defence of legal claims,
                  whether in court proceedings or in an administrative or
                  out-of-court procedure. The legal basis for this processing is
                  our legitimate interests, namely the protection and assertion
                  of our legal rights, your legal rights and the legal rights of
                  others.
                </li>
                <li>
                  the purposes of obtaining or maintaining insurance coverage,
                  managing risks, or obtaining professional advice. The legal
                  basis for this processing is our legitimate interests, namely
                  the proper protection of our business against risks.
                </li>
                <li>
                  compliance with a legal obligation to which we are subject, or
                  in order to protect your vital interests or the vital
                  interests of another natural person.
                </li>
              </ul>
              <p>We may use your data for the following purposes.</p>
              <ul>
                <li>
                  To create and authenticate your account with the Rupeezo
                  Platform;
                </li>
                <li>
                  To identify you as a registered user of the Rupeezo Platform
                  and to administer your account. This also includes creating a
                  single profile on you based on the information available on
                  the Rupeezo Platform;
                </li>
                <li>
                  To enable you to use the Rupeezo Platform and our Services;
                </li>
                <li>
                  To enable communications with the financial institutions/
                  partners affiliated with Rupeezo and accordingly facilitates
                  transactions by you;
                </li>
                <li>
                  To publish fact-based views and opinions regarding, inter
                  alia, the Services offered on the Rupeezo Platform, based on
                  the information available on the Rupeezo Platform;
                </li>
                <li>
                  To improve the quality of your experience when you interact
                  with the Rupeezo Platform and use our Services;
                </li>
                <li>
                  To send you notifications, verification message(s) or
                  email(s);
                </li>
                <li>
                  To allow our customer service to contact you, if necessary or
                  respond to your queries and assist you with customer service
                  or technical support;
                </li>
                <li>
                  To send newsletters, surveys, offers, and other promotional
                  materials related to our Services and for other marketing
                  purposes, customer analysis, market research and statistics;
                </li>
                <li>
                  To request for reviews of our Services or any other
                  improvements;
                </li>
                <li>
                  To prevent and detect fraud or abuse of our Services as well
                  as to prevent, detect and investigate any potential unlawful
                  or prohibited activities.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                WHAT DATA DO WE COLLECT OR PROCESS ABOUT YOU, AND FOR WHAT
                PURPOSE?
              </p>
              <p>
                You hereby permit us an expressly consent to the use of your
                personal data for the purposes listed below. We may share your
                data with legal or statutory or regulatory agencies or
                authorities; our employees, officers, advisors and agents; our
                partners, transactional counterparties such as including
                financial institutions, suppliers or service providers acting on
                our behalf (as the case may be), etc. solely for the purposes
                listed in this Policy.
              </p>
              <p>
                We may share the information given by you with third parties
                where we feel that such third parties may improve the quality of
                services imparted by us to you.
              </p>
              <p>
                We may share your personal data with our service providers,
                ad-servicers, ad-platforms and third parties for research,
                marketing, analytics and other purposes, provided such
                information does not identify you particularly. We may share
                legally permitted information with third party that we may
                engage to perform certain tasks including but not limited to
                payment processing, data hosting, and data processing platforms
                to understand how you engage with us and develop an
                understanding of how you prefer to interact with us. We may hire
                such third party for market research, surveys, etc. and may
                provide them with legally permittable information specifically
                for use in connection therewith. All such information will be
                shared in a manner which does not identify you particularly.
              </p>
              <p>
                We may collect financial information and disclose the same to
                third-parties as necessary to complete billing operations. We
                may require you to make payments for the Services availed by
                using your credit card, wire transfer, debit card or
                cheque/cash. Verification of credit information, however, is
                accomplished solely by you through the authentication process.
                Your credit card/debit card details are transacted upon secure
                sites of approved payment gateways which are digitally under
                encryption, thereby providing the highest possible degree of
                care as per current technology. We provide you an option not to
                save your payment details. You are advised, however, that
                internet technology is not fully safe and you should exercise
                discretion while using the same.
              </p>
              <p>
                In addition to the specific disclosures of personal data set out
                in this Section, we may disclose your personal data where such
                disclosure is necessary for compliance with a legal obligation
                to which we are subject, or in order to protect your vital
                interests or the vital interests of another natural person. We
                may also disclose your personal data where such disclosure is
                necessary for the establishment, exercise or defence of legal
                claims, whether in court proceedings or in an administrative or
                out-of-court procedure.
              </p>
              <p>
                We only share your personal data on a partial and “need-to-know”
                basis with any third party. We shall take all reasonable steps
                to ensure that the confidentiality of your information is
                maintained by imposing strict confidentiality standards on all
                the third parties with whom we part this information. In all
                circumstances we shall ensure that your personal information is
                protected by strict confidentiality agreement. We shall not
                allow any third parties to retain your personal information
                longer than what is warranted by the nature of services
                rendered.
              </p>
              <p>
                By agreeing to avail the service offered by Rupeezo, you agreed
                to the collection, use and sharing of your personal data or
                Information by Rupeezo as per the terms of this Policy. You
                always have the right to refuse or withdraw your consent to
                share/dissemination of your personal data by contacting us as
                per the details provided in this Policy. However, in such an
                event, you may no longer be eligible to avail our services.
              </p>
              <p>
                We will not sell, share, rent or otherwise intentionally
                transfer your name, address, telephone number or e-mail address
                to market research companies, direct marketing companies or
                anyone else. The only exceptions when we may disclose your
                personal information to third parties are as follows:
              </p>
              <ul>
                <li>
                  You request us to share, or consent to us sharing, your data
                  with the third parties for a specified purpose;
                </li>
                <li>
                  We provide your responses to a third party who is
                  contractually bound to keep the information confidential and
                  use it only for research or statistical purposes
                </li>
              </ul>
              <p>
                In the rare but possible circumstance that the information is
                subject to disclosure pursuant to judicial or other government
                subpoenas, warrants, orders or for similar legal or regulatory
                requirements.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p className=" fs-4 text-primary">
                WHERE DO WE PROCESS AND STORE YOUR DATA?
              </p>
              <p>
                Your data will be processed and stored in India. However, we may
                store your data with servers located across various countries.
                Further, we may engage third-parties to process your data on our
                behalf. Such third-parties may be located across various
                jurisdictions. By agreeing to the terms of this Policy, you
                provide us with your explicit consent to process your
                information mentioned above for the purpose defined in this
                Policy. The data protection regulations in India or such other
                jurisdictions mentioned above may differ from those of your
                country of residence.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                WHERE DO WE PROCESS AND STORE YOUR DATA?
              </p>
              <p>
                Your personal data that we process for any purpose or purposes
                shall not be kept for longer than is necessary for that purpose
                or those purposes. Subject to exceptions based on your
                continuing use of the Rupeezo Platform, we intend retain your
                personal data as follows:
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                HOW LONG DO WE RETAIN YOUR DATA?
              </p>
              <p>
                Your personal data that we process for any purpose or purposes
                shall not be kept for longer than is necessary for that purpose
                or those purposes. Subject to exceptions based on your
                continuing use of the Rupeezo Platform, we intend retain your
                personal data as follows:
              </p>
              <ul>
                <li>
                  Usage data will be retained for a minimum period of one week
                  following the date of your visit, and for a maximum period of
                  ten years following the date of your last visit.
                </li>
                <li>
                  Response data will be retained for a minimum period of one
                  month following the submission of your response, and for a
                  maximum period of ten years following the submission of your
                  last response.
                </li>
                <li>
                  Profile data will be retained for a minimum period of one day
                  following the date of deletion of your profile on our Website,
                  and for a maximum period of ten years following such deletion.
                </li>
                <li>
                  Service data will be retained for a minimum period of one
                  month following the fulfilment of the Service, and for a
                  maximum period of ten years following the last date on which
                  any obligation in respect of such Service concludes.
                </li>
                <li>
                  Publication data will be retained for a minimum period of one
                  week following the publication of such data, and for a maximum
                  period of ten years following the date on which such data is
                  removed from such publication.
                </li>
                <li>
                  Enquiry data will be retained for a minimum period of one day
                  following the date of the enquiry, and for a maximum period of
                  ten years following the date of the enquiry.
                </li>
                <li>
                  Customer relationship data will be retained for a minimum
                  period of one month following the conclusion of the said
                  relationship, and for a maximum period of ten years following
                  the conclusion of the said relationship.
                </li>
                <li>
                  Transaction data will be retained for a minimum period of one
                  week following the date of the transaction, and for a maximum
                  period of ten years following the date of the last
                  transaction.
                </li>
                <li>
                  Notification data will be retained for a minimum period of one
                  day following the date of unsubscribing from our newsletters,
                  and for a maximum period of ten years following the date of
                  request for such unsubscribing.
                </li>
                <li>
                  Correspondence data will be retained for a minimum period of
                  one day following the date of the communication, and for a
                  maximum period of twenty years following the date of the
                  communication.
                </li>
              </ul>
              <p>
                In some cases, it is not possible for us to specify in advance
                the periods for which your personal data will be retained. In
                such cases, we will determine the period of retention based on
                the following criteria:
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">LINK TO OTHER WEBSITES</p>
              <p>
                Our services may contain links to other websites that are not
                operated by us. If you click on a third- party link, you will be
                directed to that third party's site. We strongly advise you to
                review the privacy policy of every site you visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third-party sites or
                services.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">COMMUNICATIONS</p>
              <p>
                You may receive email updates from us through our newsletters,
                surveys, offers, and other promotional materials related to our
                Services. We hope you will find these updates interesting and
                informative. If you wish not to receive them, please click on
                the "unsubscribe" link or follow the instructions in each
                message. You may share your feedback and comments with us,
                including that relating to an issue or incidence. To report an
                incidence regarding your data, you may contact us using our
                contact details and inform us about such incidence.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">LIMITATION OF LIABILITY</p>
              <p>
                We are not be responsible for verifying the authenticity of the
                information supplied by you. In case of any erroneous data, our
                liability is limited to removal of such data from our system. We
                are not liable for any data loss or theft due to an unauthorized
                access to your computer or device. We shall not be responsible
                for any breach of security or for any actions of any third
                parties that receives your personal data or events that are
                beyond our reasonable control including, acts of government,
                computer hacking, unauthorised access to computer data and
                storage device, computer crashes, breach of security and
                encryption, poor quality of internet service or telephone
                service etc. Our liability is strictly limited in all cases to
                the extent set out in the Terms of Use document; please read the
                Terms of Use document before sharing your data with us.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">DERIVATIVE DATA</p>
              <p>
                We may generate derived data and anonymous statistical
                information based on the data available on the Rupeezo Platform.
                Such derived data and anonymous statistical information shall
                not identify you at a personal level, and shall be exclusively
                our property. We may use such data or information for any
                legitimate purpose as we may determine, without any compensation
                to you.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className=" fs-4 text-primary">
                CHANGES TO THIS PRIVACY POLICY
              </p>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. We will update the "Last updated" date at the top of
                this Privacy Policy. You are advised to review this Privacy
                Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
