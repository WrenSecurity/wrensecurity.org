---
title: Wren:IDM 6.1.0 Released
date: 2022-12-30
excerpt: |
  Brand new release Wren:IDM 6.1.0 has been published. This release is fully compatible with JDK 17.
sidebar: false
---

<Post>

Brand new release [Wren:IDM 6.1.0](https://github.com/WrenSecurity/wrenidm/releases/tag/6.1.0) has been published.
This release is fully compatible with JDK 17 and Maven `groupId` of all modules was switched to our package `org.wrensecurity.wrenidm`.

## Changes

List of significant changes:

* Add Java 17 support and drop Java 8 support
* Change Maven `groupId` to `org.wrensecurity.wrenidm`

Other changes:

* Change Maven packaging from `bundle` to `jar` ([#112](https://github.com/WrenSecurity/wrenidm/issues/112))
* Support for custom operation-specific options in provisioner ([#124](https://github.com/WrenSecurity/wrenidm/issues/124))
* Workaround Rhino JS file encoding issue ([#130](https://github.com/WrenSecurity/wrenidm/issues/130))
* Improve docker build (multistage with buildkit cache)
* Upgrade `wrensec-parent` to the latest release (`4.0.0`)
* Upgrade `wrensec-commons` to `22.4.0`
* Upgrade `wrensec-ui` to `22.1.1`
* Upgrade `wrenicf-java-framework` to `1.5.3.0`
* Upgrade Rhino JS to `1.7.14`

## How to get

You can build your own binary as described by [README](https://github.com/WrenSecurity/wrenidm/blob/main/README.md#build-the-source-code).

Alternatively you can use the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenidm):

```bash
docker run --rm --name wrenidm-test -p 8080:8080 wrensecurity/wrenidm:6.1.0
```

</Post>
