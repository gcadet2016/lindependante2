# Docker
Source: https://medium.com/code-kings/docker-building-a-lamp-stack-9503c62d9214 

The DockerFiles
DockerFiles are files that you can build a docker image. 
Think of this file as a script that you would run to set up your environment on a VirtualBox after installing the Host OS (Ubuntu,CentOS, and so forth) and then exporting the appliance for others to use. 
Docker Images are essentially the same concept. You are creating an image for your tiny server aka container.

## The docker file

Voir fichier docker/DevBox.DockerFile

### FROM Command
The FROM command tells the docker file, which images to use as it’s base image. You don’t usually start from complete scratch. I’m sure there are times you can, but they are probably pretty rare circumstances.

In file above, you start with a base image to work from. In this case, we are building off of the latest version of ubuntu.

The syntax for images in docker

```repository_name:tag_name```

In this example its ubuntu:latest. The latest tag is used in most images to grab the most recent version of the image.

### ENV Command
```ENV DEBIAN_FRONTEND=noninteractive```

The line above is allowing you to set an environment variable within your new images. This would be the same as setting an environment variable while SSH’ed into a server. In this case, this makes it so that when we are installing other software and there is a prompt that requires user input, that it will be bypassed and not impeded the software’s installation. I was having my image build fail on a php extension that needed some input. This allowed me to bypass that.

### RUN Command
The RUN commands are as if you are typing in a command in your terminal window. In this file, I was installing the php core and it’s corresponding extensions.

### COPY Command
The COPY command copies a file from a local directory on your computer to the container’s file system. Think of it like a scp command on a normal server.

Syntax of Copy Command

```/path/to/local/file.txt /path/to/container/filepath/file.txt```

### CMD Command
The main purpose of a CMD is to provide defaults for an executing container. In this case, we want to launch apache and run it in the foreground so the container stays persistent and active. Unlike a normal server that will run 24/7 until manually powered off, a container will automatically turn itself once it’s finished running. By running Apache in the foreground it keeps the container from powering down.

### EXPOSE Command
The Expose command allows whichever port you want to open up **INTERNALLY**, within the network of the docker containers, but not open to the outside network.

## Create the docker container
```
cd C:\Users\guigu\OneDrive\Dev\Esecad\Phase1\2-Front-end\5-Concepts_base_CSS\Exercice_1

rem Le dossier courant contient un dossier docker

docker build -t lamp docker

docker run -d -p 80:8080 --name ApacheSrv lamp 
```