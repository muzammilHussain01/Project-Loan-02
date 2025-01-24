import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import termCondetion from "../img/termsConditions.png";
import Footer from "../footer/Footer";
import MoveToTop from "../moveToTop/MoveToTop";
const TermCondetion = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${termCondetion})`,
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
            <Col lg={6}></Col>
            <Col lg={4} className="pt-5">
              <h1 className="pt-5 text-white">Term & Condetion</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {" "}
        <Container>
          <p className="text-center text-primary pt-4 fw-bold fs-3">
            Terms and Conditions
          </p>
          <p>
            This Terms of Use (“Terms”) form a binding contract between Gigs
            Media Private Limited (“Rupeezo”) and you. Rupeezo is a proprietary
            and technology platform at{" "}
            <a
              href="https://rupeezo.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rupeezo.in/
            </a>{" "}
            and also over microsites created therefrom (jointly “the Rupeezo
            Platform”). Rupeezo Platform is a set of proprietary APIs, SDKs,
            tools, plugins, code, technology, content, and facilitates
            communication between customers and financial institutions
            registered with Rupeezo Platform (“financial institutions”).
          </p>

          <p>
            By accessing the Rupeezo Platform and/or by availing any of the
            services offered by Rupeezo and/or its associates, you agree to the
            provisions of this Terms. If you do not agree with any of the
            provisions of these Terms, you must immediately cease your access to
            the Rupeezo Platform and not use our Services. By continuing to
            access and/or use the Rupeezo Platform, or by using our Services,
            you confirm that you have read, understood, and accepted each of the
            provisions of these Terms.
          </p>

          <p>
            This Terms shall govern your use of the Rupeezo Platform and the
            Services offered by Rupeezo. Supplemental terms may apply to
            specific Services, for example, arrangements for a specific
            occasion, movement, or advancement, and such supplemental terms will
            be disclosed to you regarding the appropriate Service(s).
            Supplemental terms, if any, will be in addition to, and shall be
            deemed a part of, these Terms for the purposes of the applicable
            Service(s). Supplemental terms shall prevail over these Terms in the
            event of a conflict with respect to the applicable Services.
          </p>

          <p>
            Rupeezo may, at its sole discretion, amend the Terms from time to
            time. Unless otherwise set out herein, amendments will be effective
            upon Rupeezo’s posting of such updated Terms or the amended policies
            or supplemental terms on the applicable Service(s). Your continued
            access or use of the Services after such posting constitutes your
            consent to be bound by the Terms, as amended. These Terms are to be
            read in conjunction with the Privacy Policy documents, the
            provisions of which are deemed to have been included herein by
            reference.
          </p>

          <h5 className="text-primary">
            <strong>ELIGIBILITY</strong>
          </h5>
          <p>
            By accepting the provisions of these Terms, you represent to Rupeezo
            that:
          </p>
          <ol type="i">
            <li>
              You are a person ‘competent to contract’ under the Indian Contract
              Act, 1872 and are not disqualified by operation of law, order of a
              court, or by provisions of any contract to which you are bound,
              from accessing and using the Rupeezo Platform and from performing
              your obligations hereunder.
            </li>
            <li>You are not insolvent or bankrupt.</li>
            <li>
              If you are an individual, you must be at least 18 years old. If
              you are a non-individual, you must be duly authorized (by such
              non-individual entity) to agree to these Terms.
            </li>
            <li>
              You represent and warrant that you are capable of entering into
              these Terms and performing the obligations set out hereunder.
            </li>
            <li>You must be a citizen of India.</li>
            <li>
              No ‘bots’ or other automated tools or methods are used to access
              the Rupeezo Platform.
            </li>
          </ol>
          <p>
            Rupeezo reserves the right to take suitable action if this
            representation is found to be incorrect.
          </p>

          <h5 className="text-primary">
            <strong>ACCOUNT SET UP</strong>
          </h5>
          <p>
            The Rupeezo Platform allows you to create a user account. You can
            browse the Rupeezo Platform without creating a user account, but
            some features may be unavailable unless you create an account. You
            should not create more than one user account on the Rupeezo
            Platform. When creating your user account, you will be required to
            submit certain information about yourself. It is recommended that
            you keep your account information current and follow good password
            security practices to avoid misuse of your profile. You are solely
            responsible for the security of your account; you expressly agree to
            absolve Rupeezo of any responsibility or liability in this regard.
          </p>

          <p>
            All information you provide during the registration process and
            thereafter should be accurate and complete. Rupeezo is not
            responsible for verifying the information you provide, but may
            require you to substantiate the information provided through
            supporting documents.
          </p>

          <p>
            You are solely responsible for maintaining the confidentiality of
            your user account and its access credentials. You should notify
            Rupeezo immediately in writing of any unauthorized access to or
            through your user account or any other breach of security. Rupeezo
            will not be liable for any loss that may be incurred by you as a
            result of unauthorized access.
          </p>

          <p>
            Rupeezo may, at its sole discretion, curtail your access to the
            Rupeezo Platform without assigning a reason if:
          </p>
          <ol type="a">
            <li>You're in breach of any provisions of these Terms.</li>
            <li>
              Rupeezo is unable to verify or authenticate any information
              provided by you.
            </li>
            <li>
              Rupeezo has reason to believe that your actions may infringe on
              any third-party rights, breach any applicable law, or violate any
              court order or executive authority.
            </li>
          </ol>

          <p>
            Rupeezo reserves the right, at its sole discretion, to withhold,
            suspend, or terminate your access to the Rupeezo Platform without
            prior notice for any reasonable cause, including routine maintenance
            activity, breach of these Terms by you, and audit and fraud
            detection activity.
          </p>

          <p>
            If your access has been curtailed, suspended, or terminated, then
            you shall not attempt to re-register yourself on the Rupeezo
            Platform or use the Rupeezo Platform in any manner whatsoever. The
            remedies available to Rupeezo hereunder are without prejudice to its
            entitlements under the law, including the right to recover any
            amount due to be paid by you and to pursue legal action as deemed
            necessary by Rupeezo.
          </p>

          <h5 className="text-primary">
            <strong>SERVICES</strong>
          </h5>
          <p>
            The Rupeezo Platform enables you to avail of short-term credit
            facilities from financial institutions and acts as an intermediary
            to facilitate communication between you and these institutions.
            Under the services offered by Rupeezo Platform, it may require you
            to submit information for a Credit Facility Application for
            short-term credit facilities. Rupeezo Platform reserves the right to
            verify the accuracy and correctness of the information submitted by
            you.
          </p>

          <p>
            Upon submission of the required information, Rupeezo Platform may
            either accept or reject your Credit Facility Application. This
            decision is based on various factors, including Rupeezo's assessment
            methods and systems. An acceptance of a Credit Facility Application
            does not guarantee disbursement of the advance.
          </p>

          <p>
            You agree and accept that Rupeezo has the right to verify any
            information, check credit references, and employment details, and
            obtain credit reports to determine creditworthiness from time to
            time.
          </p>

          <p>
            The service offered using Rupeezo Platform does not guarantee that
            the advance applied for will be disbursed. Rupeezo Platform merely
            acts as a facilitator, and all decisions to grant the advance rest
            with financial institutions and will be made using their credit
            decision processes and methodologies.
          </p>

          <p>
            You acknowledge that financial institutions will require further
            documentation, information, and details under applicable laws and
            internal policies. When a financial institution decides to grant an
            advance, it will require you to execute a loan/credit facility
            agreement (“Loan Documentation”) with it.
          </p>

          <ul className="custom-style-ul">
            <li>
              Repayment:
              <p className="pt-2">
                You will be required to repay the advance along with all
                interest, charges, and fees to financial institutions in a
                manner prescribed under the Loan Documentation. You are advised
                to carefully read and understand the Loan Documentation before
                availing the advance. Rupeezo's services are only to facilitate
                communication between you and the credit providers; it is not
                responsible or liable for any advance sought by you.
              </p>
            </li>
            <li>
              Separate Transactions:
              <p className="pt-2">
                You acknowledge that an advance disbursed under the Loan
                Documentation is a distinct transaction between you and
                financial institutions, independent of our Service. Any dispute
                between financial institutions and you must be settled directly
                between them.
              </p>
            </li>
            <li>
              Network Access and Devices:
              <p className="pt-2">
                You are responsible for obtaining the data network access
                necessary to use the Services. Your internet network providers'
                data usage rates and fees will apply if you access or use the
                Services from a wireless-enabled device. You are responsible for
                acquiring and updating compatible hardware or devices necessary
                to access and use the Services and Rupeezo Platform. Rupeezo
                does not guarantee that the Services and Rupeezo Platform will
                function on any particular hardware or devices.
              </p>
            </li>
            <li>
              License:
              <p className="pt-2">
                Subject to your compliance with these Terms, Rupeezo grants you
                a limited, non-exclusive, revocable, non-transferable license in
                India to: (i) access and use the Rupeezo Platform through your
                PC Framework or other portable technical gadget solely in
                connection with your use of the Services; and (ii) access and
                use any content, information, and related materials available
                through the Services for personal, non-commercial use. Any
                rights not expressly granted herein are reserved by Rupeezo.
              </p>
            </li>
            <li>
              Your Content:
              <p className="pt-2">
                You are solely responsible for any content you upload, download,
                post, email, transmit, store, or otherwise make available
                through your use of the Service. Rupeezo is not responsible for
                verifying the accuracy and genuineness of your content, nor does
                it guarantee the accuracy, integrity, or quality of such
                content. You must back up important documents, images, or other
                content that you store or access via the Service.
              </p>
            </li>
          </ul>

          <h5 className="text-primary">
            <strong>INTELLECTUAL PROPERTY AND LICENSE</strong>
          </h5>
          <p>
            Rupeezo (and its licensors, where applicable) own all rights, title,
            and interest in and to the content featured on the Rupeezo Platform,
            the service rendered, and any suggestions, ideas, or feedback
            provided by you or any other party to Rupeezo. You shall not create,
            prepare, distribute, exchange, copy, adapt, modify, sell, transmit,
            publicly display, or otherwise distribute works derived from
            Rupeezo's intellectual property.
          </p>

          <p>
            This Agreement is not a sale and does not convey to you any rights
            of ownership in or related to the Rupeezo Platform or the
            intellectual property rights owned by Rupeezo or its licensors. The
            Rupeezo name, logo, and related names are trademarks of Rupeezo, and
            no right or license is granted to you to use them.
          </p>

          <p>
            Any personal information or details provided by you while accessing
            the Rupeezo Platform belongs solely to you. In consideration of your
            acceptance and continuing compliance with these Terms, Rupeezo
            grants you a restricted, revocable, non-exclusive, non-transferable
            license to access and use the Rupeezo Platform. The License can be
            revoked without requiring prior notice.
          </p>

          <p>
            If you engage in any of the following activities, Rupeezo reserves
            the right to automatically revoke the license:
          </p>
          <ol type="a">
            <li>Breach of these Terms by you.</li>
            <li>Violation of any law or regulation or any court order.</li>
            <li>
              Use of bots or other automated methods to access the Rupeezo
              Platform.
            </li>
            <li>
              Use of the Rupeezo Platform for any purpose not expressly
              permitted by these Terms.
            </li>
            <li>
              Infringement of any third-party rights, including intellectual
              property rights.
            </li>
            <li>
              Interference with the working of the Rupeezo Platform, including
              viruses, cancel bots, trojans, or other harmful code.
            </li>
            <li>
              Registration for more than one user account or registering on
              behalf of another person without express permission.
            </li>
          </ol>

          <h5 className="text-primary">
            <strong>DISCLAIMERS</strong>
          </h5>
          <p>
            You acknowledge and agree that the Rupeezo Platform is provided “as
            is,” and “as available,” without warranty of any kind, either
            express or implied. Rupeezo expressly disclaims any and all
            promises, representations, and warranties, including any implied
            warranties of merchantability, fitness for a particular purpose,
            quiet enjoyment, system integration, and/or data accuracy in
            connection with the use of the Rupeezo Platform.
          </p>

          <p>
            No advice or information, whether oral or written, obtained from
            Rupeezo or through the Rupeezo Platform creates any warranty not
            expressly made herein. Rupeezo makes no warranties regarding the
            quality of the Rupeezo Platform or its Services. Rupeezo is merely a
            technology platform and does not offer loans or advances.
          </p>

          <p>
            Rupeezo hereby expressly disclaims any liability regarding any of
            the above matters. If you don't agree with any of these disclaimers,
            then do not use our Services.
          </p>

          <h5 className="text-primary">
            <strong>LIMITATION OF LIABILITY</strong>
          </h5>
          <p>
            You acknowledge and agree that, to the maximum extent permitted by
            law, the entire risk, damages, and losses arising out of your access
            to the Rupeezo Platform and any content available thereon, from any
            third-party operators, financial institutions, or service providers,
            whether in person or online, remains with you. Neither Rupeezo nor
            any of its representatives will be liable for any incidental,
            special, or consequential damages, including theft, lost profits,
            loss of data, or emotional distress arising out of or in connection
            with your use of the Rupeezo Platform or content therein.
          </p>

          <p>
            Rupeezo shall not be liable for any loss or damage arising from any
            event or circumstance beyond its control. Notwithstanding anything
            to the contrary, the total liability of Rupeezo to you for all
            claims arising from these Terms will not exceed Rs. 1,000/-.
          </p>

          <p>
            The provisions of this clause shall survive the termination of the
            agreement constituted hereby.
          </p>

          <h5 className="text-primary">
            <strong>INDEMNIFICATION</strong>
          </h5>
          <p>
            You agree to release, defend, indemnify, and hold Rupeezo and its
            affiliates harmless from any claims, liabilities, damages, and
            expenses arising out of or connected with your use of the Rupeezo
            Platform.
          </p>

          <p>
            Rupeezo agrees to indemnify you against third-party claims arising
            out of infringement of any third-party intellectual properties in
            respect of the Rupeezo Platform if you provide prior written notice
            of such claims and allow Rupeezo to control the defense and
            settlement of any claim.
          </p>

          <h5 className="text-primary">
            <strong>FURTHER TERMS</strong>
          </h5>
          <p>
            Rupeezo reserves the right to amend these Terms without prior
            notice. Your continued use of the Rupeezo Platform constitutes
            acceptance of the amended Terms. You can review the most current
            version of these Terms on this webpage.
          </p>

          <p>
            If Rupeezo cannot perform its obligations due to acts of God or
            other events beyond its control, it will be excused from such
            performance for the period it persists.
          </p>

          <p>
            You or anyone acting on your behalf will not disparage or denigrate
            Rupeezo or its Platform. You should not engage in any act that would
            adversely affect Rupeezo's business or reputation.
          </p>

          <p>
            All disputes in connection with these Terms shall be resolved by
            arbitration as per the Indian Arbitration and Conciliation Act,
            1996. The arbitration will be held in Mumbai by a sole arbitrator
            appointed jointly by you and Rupeezo. The arbitral award shall be
            final and binding.
          </p>

          <h5 className="text-primary">
            <strong>CONTACT DETAILS</strong>
          </h5>

          <p>
            The Rupeezo Platform, including this website{" "}
            <a
              href="https://www.rupeezo.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rupeezo.in/
            </a>
            , is owned and operated by Rupeezo. We are registered in India under
            registration number [mention CIN], and our registered office address
            is at We work, 5th floor, Chincholi Bunder Rd, Malad, Rajan Pada,
            Mindspace, Malad West, Mumbai, Maharashtra 400064.
          </p>

          <p>
            You can contact us by post at our registered office address, by
            email at{" "}
            <a href="mailto:contactus@rupeezo.in">contactus@rupeezo.in</a>, by
            telephone at the contact number published on{" "}
            <a href="https://www.rupeezo.in/">https://rupeezo.in/</a>, or by
            using our website contact form at{" "}
            <a href="https://www.rupeezo.in/contact-us">
              https://rupeezo.in/contact-us
            </a>
            .
          </p>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default TermCondetion;
