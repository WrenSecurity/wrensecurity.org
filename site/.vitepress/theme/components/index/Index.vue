<script setup lang="ts">
import { withBase } from 'vitepress';
import Features from './Features.vue';
import Feature from './Feature.vue';
</script>

<template>
  <div class="wren-home-features">
    <div class="wren-home-feature">
      <div class="wren-home-feature-title">
        <img :src="withBase('icon-gear.svg')">
        <h3>Comprehensive</h3>
      </div>
      <p>All the tools you need for building reliable Identity and Access Management systems.</p>
    </div>
    <div class="wren-home-feature">
      <div class="wren-home-feature-title">
        <img :src="withBase('icon-puzzle.svg')">
        <h3>Versatile</h3>
      </div>
      <p>Start small, adapt as needed, whether a basic tool or comprehensive IAM system.</p>
    </div>
    <div class="wren-home-feature">
      <div class="wren-home-feature-title">
        <img :src="withBase('icon-osi.svg')">
        <h3>Open</h3>
      </div>
      <p>Completely open-source. Without vendor lock-in. No licensing fees.</p>
    </div>
    <div class="wren-home-feature">
      <div class="wren-home-feature-title">
        <img :src="withBase('icon-lock.svg')">
        <h3>Secure</h3>
      </div>
      <p>Regular upgrades, security analysis, transparent vulnerability management - published as CVEs.</p>
    </div>
  </div>

  <div class="section-wrapper">
    <div class="wren-project">
      <div class="wren-project-image">
        <img :src="withBase('project-idm-img.png')">
      </div>
      <div class="wren-project-description">
        <h1>
          Identity Management
        </h1>
        <p>
          Regain control over people's access. Use Wren:IDM to streamline your identity governance and gain full control
          over where and why users have access. Increase productivity with efficient access provisioning. Reduce operational
          labour through automation and user self-service. And ensure that everyone has all the access they need, but no
          other.
        </p>
      </div>
    </div>
    <Features :columns="3">
      <Feature>
        <template #title>
          Identity Lifecycle Management
        </template>
        <template #description>
          Automatically retrieve users from the source system and provision accounts to the target systems according
          to clearly defined rules.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Workflows
        </template>
        <template #description>
          Define your workflow and approval processes, and empower managers to make decisions in access provisioning
          while leaving the rest to automation.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Extensions
        </template>
        <template #description>
          Utilize a variety of extension points to customize the logic or the CRESTful interfaces and make sure that
          the identity management smoothly integrates into your existing environment.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Auditing
        </template>
        <template #description>
          Dig into the built-in audit tracks or integrate them with log collection and SIEM tools to get complete insight
          into the identity management activities.
        </template>
      </Feature>
      <Feature>
        <template #title>
          User Self-Service
        </template>
        <template #description>
          Built-in self-service allows users to manage their identities. The changes are immediately reflected where
          necessary.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Connector Framework
        </template>
        <template #description>
          With connectors provided by Wren:ICF framework you can manage every piece of software within your organization.
        </template>
      </Feature>
    </Features>
  </div>

  <div class="section-wrapper">
    <div class="wren-project">
      <div class="wren-project-description">
        <h1>
          Access Management
        </h1>
        <p>
          A secure portal for your digital services. Use Wren:AM to establish consistent access policies and advanced
          observability across all your applications, cloud services and IT infrastructure with minimal effort. Avoid
          multiple logins with Single Sign-On to deliver a superior login experience for your users.
        </p>
      </div>
      <div class="wren-project-image">
        <img :src="withBase('project-am-img.png')">
      </div>
    </div>
    <Features :columns="3">
      <Feature>
        <template #title>
          Single Sign-on
        </template>
        <template #description>
          Centralize authentication and uniformly protect all your applications according to the highest security
          standards, while also improving the login experience.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Multi-Factor Authentication
        </template>
        <template #description>
          Add OTP, SMS, Email, or 3rd party MFA tools to your authentication flow for additional protection against
          compromised passwords.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Adaptive authentication
        </template>
        <template #description>
          Do not compromise between security and login experience. Adjust the authentication requirements based on the
          evaluated risk.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Identity Provider
        </template>
        <template #description>
          Take control of access to external or cloud services. Leverage an identity provider to supply service
          providers with authentication that complies with your policy and security rules.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Federations
        </template>
        <template #description>
          Establish an identity federation or connect with an existing one to link the identities across multiple
          identity management systems.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Standard protocols
        </template>
        <template #description>
          OAuth 2.0, OIDC, SAML,... Choose from a variety of authentication protocols to easily integrate your
          applications according to industry standards.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Social Login
        </template>
        <template #description>
          Delegate authentication to 3rd-party services like Google, Facebook, GitHub, or any other compatible identity
          provider, to make the sign-in and onboarding even more convenient.
        </template>
      </Feature>
      <Feature>
        <template #title>
          User Self-service
        </template>
        <template #description>
          Place the user self-registration, account management, and password reset features where they belong, without
          the need to re-implement it in your apps.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Authorization
        </template>
        <template #description>
          Consolidate the management of your access policies and implement fine-grained access control to
          multiple resources using a central policy decision point.
        </template>
      </Feature>
    </Features>
  </div>

  <div class="section-wrapper">
    <div class="wren-project">
      <div class="wren-project-image">
        <img :src="withBase('project-ds-img.png')">
      </div>
      <div class="wren-project-description">
        <h1>
          Directory Service
        </h1>
        <p>
          Efficiently store and organize your digital identities, even in the most complex IT environments. Wren:DS provides
          a secure and scalable directory service that complies with industry standards.
        </p>
      </div>
    </div>
    <Features :columns="3">
      <Feature>
        <template #title>
          Uniform Access
        </template>
        <template #description>
          Access the data using the established LDAP (Lightweight Directory Access Protocol) or leverage the REST API
          where necessary.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Efficiency
        </template>
        <template #description>
          It can withstand even the highest loads on its own, but use replicated deployments to make your critical
          authentication services highly available.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Security
        </template>
        <template #description>
          Fine-grained access control, coupled with a comprehensive audit, ensures that your most valuable data is always
          secure.
        </template>
      </Feature>
    </Features>
  </div>

  <div class="section-wrapper">
    <div class="wren-project">
      <div class="wren-project-description">
        <h1>
          Identity Gateway
        </h1>
        <p>
          Place an identity gateway in front of your applications, microservices, and APIs to ensure consistent security
          measures, regardless of their technology or authentication capabilities. Including the most problematic legacy
          systems.
        </p>
      </div>
      <div class="wren-project-image">
        <img :src="withBase('project-ig-img.png')">
      </div>
    </div>
    <Features :columns="3">
      <Feature>
        <template #title>
          Protection
        </template>
        <template #description>
          An additional layer of protection that provides authentication (and authorization) according to your security
          standards for any application.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Simplicity
        </template>
        <template #description>
          Works as a proxy, providing trustworthy security information to your systems. Simplifying implementation in the
          applications itself.
        </template>
      </Feature>
      <Feature>
        <template #title>
          Control
        </template>
        <template #description>
          Changes in the security configurations can be made without altering the applications and central audit provides
          insight into potentially malicious activities.
        </template>
      </Feature>
    </Features>
  </div>

  <div class="section-wrapper">
    <h1>Deployment</h1>
    <p>
      Take control of your identities, regardless of your infrastructure. Whether it's your own hardware, various cloud
      providers, or any kind of hybrid environment. Clustered deployments for availability and scalability is a matter
      of course. Official Docker images are convenient for container deployments and Kubernetes operations. However, you
      can build your own when customizations are needed, or when your DevSecOps standards require an additional layer of
      supply chain security measures.
    </p>
  </div>

  <div class="section-wrapper">
    <h1>DevOps Ready</h1>
    <p>
      Utilize configuration management tools and adopt a configuration-as-code approach. This is especially useful when
      an administration interface is impractical, or when you need to align configurations across multiple environments
      or swiftly create new ones.
    </p>
  </div>

  <div class="section-wrapper">
    <h1>Project Origin</h1>
    <p>
      Though our project originated with code that ForgeRock™ had previously released, we are not affiliated with
      ForgeRock™ in any way. Our projects are based on the very latest code from what was available under a CDDL
      license (OpenAM 13.5+, OpenDJ 3.5+, OpenIDM 4.5+, and OpenIG 4.0+). ForgeRock™ no longer releases any of the
      most recent versions of their software under an open-source license. ForgeRock™'s "Community Edition" are
      ancient versions of the projects. Join our community for the latest and greatest.
    </p>
  </div>
</template>

<style scoped>
.wren-home-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 58px;
}

@media (max-width: 960px) {
  .wren-home-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .wren-home-features {
    grid-template-columns: 1fr;
  }
}

.wren-home-feature-title {
  display: flex;
  column-gap: 8px;
}

.wren-home-feature-title img {
  width: 24px;
}

.wren-home-feature-title h3 {
  margin: 0;
  font-size: 18px;
}

.section-wrapper {
  padding-top: 120px;
}

.section-wrapper p {
  margin-bottom: 0;
}

.wren-project {
  display: flex;
  column-gap: 24px;
}

.wren-project-image {
  width: 300px;
  padding-inline: 48px;

  > img {
    filter: none;
  }
}

@media (max-width: 960px) {
  .wren-project-image {
    display: none;
  }
}

.wren-project-description {
  flex: 1;
}
</style>
