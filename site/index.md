---
layout: home
title: 'Home'
hero:
  name: Identity & Access Management
  text: Open-Source Platform
  tagline: The freedom of open source. The robustness of enterprise solutions. A modular, scalable, and sustainable IAM platform designed to support organizations today and in the future.
  image:
    src: /wren-logo.svg
    alt: Wren Security logo
  actions:
    - theme: brand
      text: Explore the Platform
      link: https://docs.wrensecurity.org
    - theme: alt
      text: View on GitHub
      link: https://github.com/WrenSecurity
---

<script setup>
import { VPButton } from 'vitepress/theme';
</script>

<div class="wren-index-section">
  <div class="wren-section-header">
    <h2>
      All the Building Blocks of Digital Identity Security
    </h2>
    <p>
      Use one component, or combine them into a broader IAM architecture for access management, lifecycle automation, directory services, gateway protection and integration.
    </p>
  </div>
  <CardGrid :columns="2">
    <FeatureCard link="/projects/wrenidm/" linkText="Explore Wren:IDM" logo="/project/Wren-icon-IDM.svg" logoAlt="Wren:IDM">
      <template #title>
        Identity Governance
      </template>
      <template #description>
        Manage identity lifecycle processes, provisioning, workflows, self-service and governance automation.
      </template>
    </FeatureCard>
    <FeatureCard link="/projects/wrenam/" linkText="Explore Wren:AM" logo="/project/Wren-icon-AM.svg" logoAlt="Wren:AM">
      <template #title>
        Access Management & SSO
      </template>
      <template #description>
        Centralize authentication and authorization across applications and services, with federation and single sign-on.
      </template>
    </FeatureCard>
    <FeatureCard link="/projects/wrends/" linkText="Explore Wren:DS" logo="/project/Wren-icon-DS.svg" logoAlt="Wren:DS">
      <template #title>
        Directory Services
      </template>
      <template #description>
        Store and serve identity data with a reliable LDAP directory foundation designed for enterprise workloads.
      </template>
    </FeatureCard>
    <FeatureCard link="/projects/wrenig/" linkText="Explore Wren:IG" logo="/project/Wren-icon-IG.svg" logoAlt="Wren:IG">
      <template #title>
        Identity Gateway
      </template>
      <template #description>
        Protect applications, APIs and services with gateway-based access control and integration patterns.
      </template>
    </FeatureCard>
    <FeatureCard link="/projects/wrenicf/" linkText="Explore Wren:ICF" logo="/project/Wren-icon-ICF.svg" logoAlt="Wren:ICF">
      <template #title>
        Connector Framework
      </template>
      <template #description>
        Connect identity systems to applications, directories and infrastructure using reusable integration patterns.
      </template>
    </FeatureCard>
  </CardGrid>
</div>

<div class="wren-index-section">
  <div class="wren-section-header">
    <h2>
      Why Open Source for Identity Infrastructure
    </h2>
    <p>
      Identity & Access Management (IAM) is not just administrative software – it is critical infrastructure. Choosing an open-source foundation for your IAM stack delivers strategic, operational, and security advantages.
    </p>
  </div>
  <p class="wren-index-paragraph">
    <strong>Strategic Independence:</strong> Retain full sovereignty over your identity data, deployment models, and integrations. You have the freedom to manage the platform internally or leverage professional partner support on your own terms.
  </p>
  <p class="wren-index-paragraph">
    <strong>Auditability & Verifiable Security:</strong> Trust should be verified. With open source, your security teams can inspect every line of code, run independent security audits, and guarantee there are no hidden vulnerabilities.
  </p>
  <p class="wren-index-paragraph">
    <strong>Continuous Evolution:</strong> Benefit from a platform maintained by dedicated open-source experts. Open standards (OIDC, SAML, LDAPv3) ensure long-term interoperability and guard your infrastructure against technology deprecation.
  </p>
</div>

<div class="wren-index-section">
  <div class="wren-section-header">
    <h2>
      Built for Transparency, Security and Continuity
    </h2>
    <p>
      Wren Security is built for teams that treat identity as critical infrastructure. Open code, standards-based architecture and documented upgrade paths help organizations inspect, maintain and evolve their IAM systems over time.
    </p>
  </div>
  <CardGrid>
    <FeatureCard>
      <template #label>
        Open by default
      </template>
      <template #title>
        Transparency builds trust.
      </template>
      <template #description>
        The code, documentation and community discussions remain open. Knowledge is not gated. We believe in collaboration and technology that can be freely inspected, improved, and trusted.
      </template>
    </FeatureCard>
    <FeatureCard>
      <template #label>
        Secure by design
      </template>
      <template #title>
        Security you can verify.
      </template>
      <template #description>
        Built around open standards, secure defaults, responsible vulnerability handling, and robust standards-based cryptography. Our approach to identity security is proactive, not reactive.
      </template>
    </FeatureCard>
    <FeatureCard>
      <template #label>
        Crafted to last
      </template>
      <template #title>
        Built for continuity.
      </template>
      <template #description>
        Designed for modularity, stable operations, documented upgrade paths and long-term maintainability. We build software that endures, scales, and evolves alongside your organization.
      </template>
    </FeatureCard>
  </CardGrid>
</div>

<ActionBanner>
  <template #title>
    Secure Your IAM Infrastructure on an Open Foundation.
  </template>
  <template #description>
    Whether you are setting up a local prototype or deploying an enterprise IAM stack, choose the path that fits your project.
  </template>
  <template #actions>
    <VPButton theme="alt" text="Explore the Platform" href="https://docs.wrensecurity.org" />
    <VPButton theme="alt" text="View on GitHub" href="https://github.com/WrenSecurity" />
    <VPButton theme="alt" text="Talk to a Partner" href="/partners/talk-to-a-partner" />
  </template>
</ActionBanner>

<style scoped>
.wren-index-section {
  padding-top: 96px;
}

@media (max-width: 768px) {
  .wren-index-section {
    padding-top: 64px;
  }
}

.wren-index-paragraph {
  margin: 32px 0 0;
}
</style>
