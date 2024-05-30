---
title: Wren:AM 15.1.0 Released
date: 2024-05-30
excerpt: |
  New release Wren:AM 15.1.0 has been published.
sidebar: false
---

<Post>

New release [Wren:AM 15.1.0](https://github.com/WrenSecurity/wrenam/releases/tag/15.1.0) has been published.
This release upgrades UI build pipeline with its dependencies and adds support for Cisco Duo MFA.

## Changes

List of significant changes:

* New Cisco Duo authentication module
* New UI build pipeline and upgrade font-end dependencies
* Session token is no longer being used in a query parameter during login process

Review all the changes on [GitHub](https://github.com/WrenSecurity/wrenam/releases/15.1.0).

## How to get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrenam/latest/getting-started.html) page to learn how to get and run Wren:AM.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenam):

```bash
docker run --rm --name wrenam-test -p 8080:8080 wrensecurity/wrenam:15.1.0
```

</Post>
