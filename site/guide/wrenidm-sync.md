---
title: Identity Synchronization With Wren:IDM
date: 2023-11-29
excerpt: |
  Explore provisioning in our new series of blog posts introducing crucial features of Wren:IDM.
project: Wren:IDM
sidebar: false
---

<Post>

Wren:IDM is an Identity Governance and Administration (IGA) platform designed to efficiently manage user accounts, access rights, and permissions within an organization. Unlike certain opinionated solutions, its flexible data model can adapt to the organizational structure and integrate naturally with established processes.

In this article, we will explore provisioning, which is a crucial feature of identity management systems. Employing a CSV file as a source system. Leveraging implicit synchronization settings of Wren:IDM, any modifications will be automatically propagated to an LDAP directory.

1. Start by cloning the Wren:IDM cookbook with Docker and Git being the prerequisites for this example: https://github.com/WrenSecurity/wrenidm-cookbook
2. Navigate to the ‘sync’ sample folder, and spin up the prepared Docker containers using:
```bash
docker compose up -d
```
1. Explore the admin user interface at: https://localhost:8443/admin.
  Log in using 'openidm-admin' as both the username and password.
  Navigate to the 'User' tab under the 'Manage' section to verify the absence of the user data that have yet to be imported.
1. In a typical scenario, the reconciliation process is initiated by a scheduler, but for simplicity we’ll execute it manually:
```bash
curl -k \
  -u openidm-admin:openidm-admin \
  -XPOST \
  "https://localhost:8443/openidm/recon?        
_action=recon&mapping=csvEmployee_managedUser"
```
1. In the Wren:IDM admin user interface, refresh the user management page to confirm the existence of new managed user identities under 'Manage' → 'User'
2. In our case Wren:IDM is configured to automatically propagate changes to LDAP. Ensure the synchronization by listing existing LDAP accounts using this command:
```bash
docker exec ldap ldapsearch -H ldap://localhost -x -D             
"cn=admin,dc=wrensecurity,dc=org" -w admin -b 
"dc=wrensecurity,dc=org" "(objectClass=inetOrgPerson)"
```
1. When you’re done, feel free to continue exploring or remove the Docker containers using:
```bash
docker-compose stop && docker-compose rm -f
```

Onboarding, layoffs and employee changes do not pose any challenges. Automatic synchronization ensures seamless, automated propagation of changes between systems without the need for manual intervention.

For more information regarding synchronization, its types, mappings, scenarios, and actions, we advise reviewing our [documentation](https://docs.wrensecurity.org/wrenidm/latest/components/sync.html).

Well, that is pretty sweet, but who is it for?

Automation of the identity lifecycle is beneficial for all medium to large businesses. However, it is indispensable for companies with a high number of IT systems, a complicated structure, a large number of employees, high fluctuation, or regulated environments. Banks, universities, healthcare organizations, telecommunication companies, technology firms, and even public organizations. It ensures that the right people have the right access, while maintaining security standards and freeing up the hands of operations staff.

If you enjoyed this article, we'd be delighted if you tried other recipes from our cookbook or explore other [Wren Security tools](https://wrensecurity.org).

</Post>
