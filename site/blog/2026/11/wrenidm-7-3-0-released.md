---
title: Wren:IDM 7.3.0 Released
date: 2026-11-23
excerpt: |
  A new version of Wren:IDM 7.3.0 has been released. This release focuses on security
  hardening, with the Felix web console disabled by default, SBOM attestation,
  and Wren:ICF connector upgrades.
sidebar: false
---

<Post>

A new version of [Wren:IDM 7.3.0](https://github.com/WrenSecurity/wrenidm/releases/tag/7.3.0) has been released.

This release is primarily focused on security hardening. The Felix web console is now disabled by
default, and several issues reported by static code analysis have been resolved. Release artifacts now also come with SBOM
attestation, making it easier to verify what goes into your deployment.


## Changes

List of significant changes:

* Disable Felix web console by default
* Tighten authorization of workflow and patch operations
* Replace deprecated `felix.fileinstall.disableConfigSave` with `felix.fileinstall.enableConfigSave`
* Add SBOM attestation
* Upgrade `wrensec-commons` to `23.1.0`
* Upgrade Wren:ICF connectors:
  * Groovy connector to `1.5.4.0` – Scripted REST connector now uses Apache HttpClient 4 instead
    of the deprecated HTTPBuilder library, which is no longer shipped with Wren:IDM
  * LDAP connector to `1.5.3.3`


## Upgrade Notes

This release changes the default behavior of the Felix web console and of configuration write-back.
Existing Scripted REST connector scripts using `RESTClient` (HTTPBuilder) must be migrated to Apache HttpClient.
If you are upgrading from an existing Wren:IDM instance, please refer to the
[Upgrade Guide](https://docs.wrensecurity.org/wrenidm/latest/deployment/upgrade.html#_wrenidm_7_3_0)
for detailed instructions.


## How to Get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrenidm/latest/getting-started.html) page to learn how to get and run Wren:IDM.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenidm):

```bash
docker run --rm --name wrenidm-test -p 8080:8080 wrensecurity/wrenidm:7.3.0
```

</Post>
