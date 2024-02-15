---
layout: home
title: 'Home'
hero:
  name: Identity & Access Management
  text: Open-Source Platform
  tagline: Automate identity governance and secure access to all your applications in compliance with your company and industry standards, while providing the user experience users deserve.
  image:
    src: /wren-logo.png
    alt: Wren Security logo
  actions:
    - theme: brand
      text: Get Started
      link: https://docs.wrensecurity.org
    - theme: alt
      text: View on GitHub
      link: https://github.com/WrenSecurity
---

<script setup>
  import { useData } from 'vitepress';

  const { isDark } = useData();
</script>

<style scoped>
  .features {
    column-gap: 28px;
    padding-bottom: 28px;
  }
</style>

<div class="content-wrapper">
  <!-- Features -->
  <HorizontalList :items-total="4" class="features" >
    <template #default="{ itemFlexBasis }">
      <HorizontalListItem :flex-basis="itemFlexBasis">
        <template #title>
          Comprehensive
        </template>
        <template #text>
          All the tools you need for building reliable Identity and Access Management systems.
        </template>
      </HorizontalListItem>
      <HorizontalListItem :flex-basis="itemFlexBasis">
        <template #title>
          Versatile
        </template>
        <template #text>
          Start small, adapt as needed, whether a basic tool or comprehensive IAM system.
        </template>
      </HorizontalListItem>
      <HorizontalListItem :flex-basis="itemFlexBasis">
        <template #title>
          Open
        </template>
        <template #text>
          Completely open-source. Without vendor lock-in. No licensing fees.
        </template>
      </HorizontalListItem>
      <HorizontalListItem :flex-basis="itemFlexBasis">
        <template #title>
          Secure
        </template>
        <template #text>
          Regular upgrades, security analysis, transparent vulnerability management - published as CVEs.
        </template>
      </HorizontalListItem>
    </template>
  </HorizontalList>

  <!-- Product features -->
  <Section>
    <template #title>
      Identity Management
    </template>
    <template #description>
      Regain control over people's access. Use Wren:IDM to streamline your identity governance and gain full control over where and why users have access. Increase productivity with efficient access provisioning. Reduce operational labour through automation and user self-service. And ensure that everyone has all the access they need, but no other.
    </template>
    <FeatureList :logo="isDark ? '/wren-lock-dark.svg' : '/wren-lock.svg'">
      <template #featuresVertical>
        <FeatureListItem>
          <template #name>
            Identity Lifecycle Management
          </template>
          <template #description>
            Automatically retrieve users from the source system and provision accounts to the target systems according to clearly defined rules.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Workflows
          </template>
          <template #description>
            Define your workflow and approval processes, and empower managers to make decisions in access provisioning while leaving the rest to automation.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Extensions
          </template>
          <template #description>
            Utilize a variety of extension points to customize the logic or the CRESTful interfaces to and make sure that the identity management smoothly integrates into your existing environment.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Auditing
          </template>
          <template #description>
            Dig into the built-in audit tracks or integrate them with log collection and SIEM tools to get complete insight into the identity management activities.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            User Self-Service
          </template>
          <template #description>
            Built-in self-service allows users to manage their identities. The changes are immediately reflected where necessary.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Connector Framework
          </template>
          <template #description>
            With connectors provided by Wren:ICF framework you can  manage every piece of software within your organization.
          </template>
        </FeatureListItem>
      </template>
    </FeatureList>
  </Section>

  <Section>
    <template #title>
      Access Management
    </template>
    <template #description>
      A secure portal for your digital services. Use Wren:AM to establish consistent access policies and advanced observability across all your applications, cloud services and IT infrastructure with minimal effort. Avoid multiple logins with Single Sign-On to deliver a superior login experience for your users.
    </template>
    <FeatureList logo="/wren-mockup-phone.svg">
      <template #featuresVertical>
        <FeatureListItem>
          <template #name>
            Single Sign-on
          </template>
          <template #description>
            Centralize authentication and uniformly protect all your applications according to the highest security standards, while also improving the login experience.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Multi-Factor Authentication
          </template>
          <template #description>
            Add OTP, SMS, Email, or 3rd party MFA tools to your authentication flow for additional protection against compromised passwords.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Adaptive authentication
          </template>
          <template #description>
            Do not compromise between security and login experience. Adjust the authentication requirements based on the evaluated risk.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Identity Provider
          </template>
          <template #description>
            Take control of access to external or cloud services. Leverage an identity provider to supply service providers with authentication that complies with your policy and security rules.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Federations
          </template>
          <template #description>
            Establish an identity federation or connect with an existing one to link the identities across multiple identity management systems.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Standard protocols
          </template>
          <template #description>
            OAuth 2.0, OIDC, SAML,... Choose from a variety of authentication protocols to easily integrate your applications according to industry standards.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Social Login
          </template>
          <template #description>
            Delegate authentication to 3rd-party services like Google, Facebook, GitHub, or any other compatible identity provider, to make the sign-in and onboarding even more convenient.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            User Self-service
          </template>
          <template #description>
            Place the user self-registration, account management, and password reset features where they belong, without the need to re-implement it in your apps.
          </template>
        </FeatureListItem>
      </template>
    </FeatureList>
  </Section>

  <Section>
    <template #title>
      Directory Service
    </template>
    <template #description>
      Efficiently store and organize your digital identities, even in the most complex IT environments. Wren:DS provides a secure and scalable directory service that complies with industry standards.
    </template>
    <FeatureList :logo="isDark ? '/wren-user-dark.svg' : '/wren-user.svg'">
      <template #featuresVertical>
        <FeatureListItem>
          <template #name>
            Uniform Access
          </template>
          <template #description>
            Access the data using the established LDAP (Lightweight Directory Access Protocol) or leverage the REST API where necessary.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Efficiency
          </template>
          <template #description>
            It can withstand even the highest loads on its own, but use replicated deployments to make your critical authentication services highly available.
          </template>
        </FeatureListItem>
        <FeatureListItem>
          <template #name>
            Security
          </template>
          <template #description>
            Fine-grained access control, coupled with a comprehensive audit, ensures that your most valuable data is always secure.
          </template>
        </FeatureListItem>
      </template>
    </FeatureList>
  </Section>

  <Section>
    <template #title>
      Identity Gateway
    </template>
    <template #description>
      Place an identity gateway in front of your applications, microservices, and APIs to ensure consistent security measures, regardless of their technology or authentication capabilities. Including the most problematic legacy systems.
    </template>
    <FeatureList>
      <template #featuresHorizontal>
        <HorizontalList :items-total="3">
          <template #default="{ itemFlexBasis }">
            <HorizontalListItem :flex-basis="itemFlexBasis">
              <template #title>
                Protection
              </template>
              <template #text>
                An additional layer of protection that provides authentication (and authorization) according to your security standards for any application.
              </template>
            </HorizontalListItem>
            <HorizontalListItem :flex-basis="itemFlexBasis">
              <template #title>
                Simplicity
              </template>
              <template #text>
                Works as a proxy, providing trustworthy security information to your systems. Simplifying implementation in the applications itself.
              </template>
            </HorizontalListItem>
            <HorizontalListItem :flex-basis="itemFlexBasis">
              <template #title>
                Control
              </template>
              <template #text>
                Changes in the security configurations can be made without altering the applications and central audit provides insight into potentially malicious activities.
              </template>
            </HorizontalListItem>
          </template>
        </HorizontalList>
      </template>
    </FeatureList>
  </Section>

  <!-- Deployment -->
  <Section>
    <template #title>
      Deployment
    </template>
    <template #description>
      Take control of your identities, regardless of your infrastructure. Whether it's your own hardware, various cloud providers, or any kind of hybrid environment. Clustered deployments for availability and scalability is a matter of course. Official Docker images are convenient for container deployments and Kubernetes operations. However, you can build your own when customizations are needed, or when your DevSecOps standards require an additional layer of supply chain security measures.
    </template>
  </Section>

  <!-- DevOps -->
  <Section>
    <template #title>
      DevOps Ready
    </template>
    <template #description>
      Utilize configuration management tools and adopt a configuration-as-code approach. This is especially useful when an administration interface is impractical, or when you need to align configurations across multiple environments or swiftly create new ones.
    </template>
  </Section>
</div>

<!-- Project origin box -->
<div class="project-origin">
  <div class="tip custom-block">
    <p class="custom-block-title">Project Origin</p>
    <p>Though our project originated with code that ForgeRock™ had previously released, we are not affiliated with ForgeRock™ in any way. Our projects are based on the very latest code from what was available under a CDDL license (OpenAM 13.5+, OpenDJ 3.5+, OpenIDM 4.5+, and OpenIG 4.0+). ForgeRock™ no longer releases any of the most recent versions of their software under an open-source license. ForgeRock™'s "Community Edition" are ancient versions of the projects. Join our community for the latest and greatest.</p>
  </div>
</div>
