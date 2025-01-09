import{_ as u,c as p,a as d,b as e,w as a,d as n,r,o,e as s}from"./app-D6t-_E5r.js";const m={},b={class:"vp-file-tree"},v={class:"tree-node folder"},h={class:"tree-node folder"},f={class:"tree-node folder"},y={class:"tree-node file"},g={class:"tree-node file"},w={class:"tree-node file"},k={class:"tree-node file"};function T(A,l){const i=r("VPIcon"),c=r("FileTreeItem"),t=r("VPCard");return o(),p("div",null,[l[12]||(l[12]=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用non-root用户启动容器，默认当前用户，如有需要请自行更改</p></div><h2 id="docker工作目录树" tabindex="-1"><a class="header-anchor" href="#docker工作目录树"><span>docker工作目录树</span></a></h2>',3)),e(t,null,{default:a(()=>[n("div",b,[n("ul",null,[e(c,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",v,[e(i,{name:"vscode-icons:default-folder"}),l[0]||(l[0]=n("span",{class:"name"},"docker",-1))]),n("ul",null,[e(c,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",h,[e(i,{name:"vscode-icons:default-folder"}),l[1]||(l[1]=n("span",{class:"name"},"redis",-1))]),n("ul",null,[e(c,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",f,[e(i,{name:"vscode-icons:folder-type-config"}),l[2]||(l[2]=n("span",{class:"name"},"conf",-1))]),n("ul",null,[e(c,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",y,[e(i,{name:"vscode-icons:file-type-config"}),l[3]||(l[3]=n("span",{class:"name"},"redis.conf",-1))])]),_:1})])]),_:1}),e(c,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",g,[e(i,{name:"vscode-icons:file-type-docker"}),l[4]||(l[4]=n("span",{class:"name"},"Dockerfile",-1))])]),_:1})])]),_:1}),e(c,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",w,[e(i,{name:"vscode-icons:file-type-light-yaml"}),l[5]||(l[5]=n("span",{class:"name"},"compose.yaml",-1))])]),_:1}),e(c,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",k,[e(i,{name:"vscode-icons:file-type-dotenv"}),l[6]||(l[6]=n("span",{class:"name"},".env",-1))])]),_:1})])]),_:1})])])]),_:1}),l[13]||(l[13]=n("h2",{id:"新建docker工作目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#新建docker工作目录"},[n("span",null,"新建docker工作目录")])],-1)),e(t,null,{default:a(()=>l[7]||(l[7]=[n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &&"),n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," cd"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1)])),_:1}),l[14]||(l[14]=n("h2",{id:"创建dockerfile用来自定义构建容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建dockerfile用来自定义构建容器"},[n("span",null,"创建Dockerfile用来自定义构建容器")])],-1)),e(t,null,{default:a(()=>l[8]||(l[8]=[n("div",{class:"vp-steps"},[n("ol",null,[n("li",null,"新建redis目录、conf配置文件目录")]),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &&"),n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," cd"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," conf")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("ol",{start:"2"},[n("li",null,"conf目录下新建配置文件redis.conf")]),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"vim"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," conf/redis.conf")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])])]),n("details",{class:"hint-container details"},[n("summary",null,"点我查看reids.conf配置"),n("div",{class:"language- line-numbers-mode","data-ext":"","data-title":""},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"# Redis configuration file example.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that in order to read the configuration file, Redis must be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# started with the file path as first argument:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ./redis-server /path/to/redis.conf")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note on units: when memory size is needed, it is possible to specify")]),s(`
`),n("span",{class:"line"},[n("span",null,"# it in the usual form of 1k 5GB 4M and so forth:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1k => 1000 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1kb => 1024 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1m => 1000000 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1mb => 1024*1024 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1g => 1000000000 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1gb => 1024*1024*1024 bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# units are case insensitive so 1GB 1Gb 1gB are all the same.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################## INCLUDES ###################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Include one or more other config files here.  This is useful if you")]),s(`
`),n("span",{class:"line"},[n("span",null,"# have a standard template that goes to all Redis servers but also need")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to customize a few per-server settings.  Include files can include")]),s(`
`),n("span",{class:"line"},[n("span",null,"# other files, so use this wisely.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,`# Note that option "include" won't be rewritten by command "CONFIG REWRITE"`)]),s(`
`),n("span",{class:"line"},[n("span",null,"# from admin or Redis Sentinel. Since Redis always uses the last processed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# line as value of a configuration directive, you'd better put includes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# at the beginning of this file to avoid overwriting config change at runtime.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If instead you are interested in using includes to override configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# options, it is better to use include as the last line.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Included paths may contain wildcards. All files matching the wildcards will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# be included in alphabetical order.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that if an include path contains a wildcards but no files match it when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server is started, the include statement will be ignored and no error will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# be emitted.  It is safe, therefore, to include wildcard files from empty")]),s(`
`),n("span",{class:"line"},[n("span",null,"# directories.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# include /path/to/local.conf")]),s(`
`),n("span",{class:"line"},[n("span",null,"# include /path/to/other.conf")]),s(`
`),n("span",{class:"line"},[n("span",null,"# include /path/to/fragments/*.conf")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################## MODULES #####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Load modules at startup. If the server is not able to load modules")]),s(`
`),n("span",{class:"line"},[n("span",null,"# it will abort. It is possible to use multiple loadmodule directives.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# loadmodule /path/to/my_module.so")]),s(`
`),n("span",{class:"line"},[n("span",null,"# loadmodule /path/to/other_module.so")]),s(`
`),n("span",{class:"line"},[n("span",null,"# loadmodule /path/to/args_module.so [arg [arg ...]]")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################## NETWORK #####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'# By default, if no "bind" configuration directive is specified, Redis listens')]),s(`
`),n("span",{class:"line"},[n("span",null,"# for connections from all available network interfaces on the host machine.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is possible to listen to just one or multiple selected interfaces using")]),s(`
`),n("span",{class:"line"},[n("span",null,'# the "bind" configuration directive, followed by one or more IP addresses.')]),s(`
`),n("span",{class:"line"},[n("span",null,'# Each address can be prefixed by "-", which means that redis will not fail to')]),s(`
`),n("span",{class:"line"},[n("span",null,"# start if the address is not available. Being not available only refers to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# addresses that does not correspond to any network interface. Addresses that")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are already in use will always fail, and unsupported protocols will always BE")]),s(`
`),n("span",{class:"line"},[n("span",null,"# silently skipped.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Examples:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bind 192.168.1.100 10.0.0.1     # listens on two specific IPv4 addresses")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bind 127.0.0.1 ::1              # listens on loopback IPv4 and IPv6")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bind * -::*                     # like the default, all available interfaces")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# internet, binding to all the interfaces is dangerous and will expose the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instance to everybody on the internet. So by default we uncomment the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# following bind directive, that will force Redis to listen only on the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# IPv4 and IPv6 (if available) loopback interface addresses (this means Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will only be able to accept client connections from the same host that it is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# running on).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES")]),s(`
`),n("span",{class:"line"},[n("span",null,"# COMMENT OUT THE FOLLOWING LINE.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You will also need to set a password unless you explicitly disable protected")]),s(`
`),n("span",{class:"line"},[n("span",null,"# mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bind 127.0.0.1 -::1")]),s(`
`),n("span",{class:"line"},[n("span",null,"bind * -::*")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, outgoing connections (from replica to master, from Sentinel to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instances, cluster bus, etc.) are not bound to a specific local address. In")]),s(`
`),n("span",{class:"line"},[n("span",null,"# most cases, this means the operating system will handle that based on routing")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and the interface through which the connection goes out.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Using bind-source-addr it is possible to configure a specific address to bind")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to, which may also affect how the connection gets routed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bind-source-addr 10.0.0.1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Protected mode is a layer of security protection, in order to avoid that")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis instances left open on the internet are accessed and exploited.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When protected mode is on and the default user has no password, the server")]),s(`
`),n("span",{class:"line"},[n("span",null,"# only accepts local connections from the IPv4 address (127.0.0.1), IPv6 address")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (::1) or Unix domain sockets.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default protected mode is enabled. You should disable it only if")]),s(`
`),n("span",{class:"line"},[n("span",null,"# you are sure you want clients from other hosts to connect to Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# even if no authentication is configured.")]),s(`
`),n("span",{class:"line"},[n("span",null,"protected-mode yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis uses default hardened security configuration directives to reduce the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# attack surface on innocent users. Therefore, several sensitive configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# directives are immutable, and some potentially-dangerous commands are blocked.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configuration directives that control files that Redis writes to (e.g., 'dir'")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and 'dbfilename') and that aren't usually modified during runtime")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are protected by making them immutable.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Commands that can increase the attack surface of Redis and that aren't usually")]),s(`
`),n("span",{class:"line"},[n("span",null,"# called by users are blocked by default.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These can be exposed to either all connections or just local ones by setting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# each of the configs listed below to either of these values:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# no    - Block for any connection (remain immutable)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# yes   - Allow for any connection (no protection)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# local - Allow only for local connections. Ones originating from the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#         IPv4 address (127.0.0.1), IPv6 address (::1) or Unix domain sockets.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enable-protected-configs no")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enable-debug-command no")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enable-module-command no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Accept connections on the specified port, default is 6379 (IANA #815344).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If port 0 is specified Redis will not listen on a TCP socket.")]),s(`
`),n("span",{class:"line"},[n("span",null,"port 6379")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# TCP listen() backlog.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In high requests-per-second environments you need a high backlog in order")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to avoid slow clients connection issues. Note that the Linux kernel")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will silently truncate it to the value of /proc/sys/net/core/somaxconn so")]),s(`
`),n("span",{class:"line"},[n("span",null,"# make sure to raise both the value of somaxconn and tcp_max_syn_backlog")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to get the desired effect.")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp-backlog 511")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Unix socket.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify the path for the Unix socket that will be used to listen for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# incoming connections. There is no default, so Redis will not listen")]),s(`
`),n("span",{class:"line"},[n("span",null,"# on a unix socket when not specified.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# unixsocket /run/redis.sock")]),s(`
`),n("span",{class:"line"},[n("span",null,"# unixsocketperm 700")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Close the connection after a client is idle for N seconds (0 to disable)")]),s(`
`),n("span",{class:"line"},[n("span",null,"timeout 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# TCP keepalive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of communication. This is useful for two reasons:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) Detect dead peers.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Force network equipment in the middle to consider the connection to be")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    alive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On Linux, the specified value (in seconds) is the period used to send ACKs.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that to close the connection the double of the time is needed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On other kernels the period depends on the kernel configuration.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A reasonable value for this option is 300 seconds, which is the new")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis default starting with Redis 3.2.1.")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp-keepalive 300")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Apply OS-specific mechanism to mark the listening socket with the specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ID, to support advanced routing and filtering capabilities.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On Linux, the ID represents a connection mark.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On FreeBSD, the ID represents a socket cookie ID.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On OpenBSD, the ID represents a route table ID.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default value is 0, which implies no marking is required.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# socket-mark-id 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################# TLS/SSL #####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'# By default, TLS/SSL is disabled. To enable it, the "tls-port" configuration')]),s(`
`),n("span",{class:"line"},[n("span",null,"# directive can be used to define TLS-listening ports. To enable TLS on the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default port, use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# port 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-port 6379")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configure a X.509 certificate and private key to use for authenticating the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# server to connected clients, masters or cluster peers.  These files should be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# PEM formatted.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-cert-file redis.crt")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-key-file redis.key")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the key file is encrypted using a passphrase, it can be included here")]),s(`
`),n("span",{class:"line"},[n("span",null,"# as well.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-key-file-pass secret")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Normally Redis uses the same certificate for both server functions (accepting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# connections) and client functions (replicating from a master, establishing")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster bus connections, etc.).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Sometimes certificates are issued with attributes that designate them as")]),s(`
`),n("span",{class:"line"},[n("span",null,"# client-only or server-only certificates. In that case it may be desired to use")]),s(`
`),n("span",{class:"line"},[n("span",null,"# different certificates for incoming (server) and outgoing (client)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# connections. To do that, use the following directives:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-client-cert-file client.crt")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-client-key-file client.key")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the key file is encrypted using a passphrase, it can be included here")]),s(`
`),n("span",{class:"line"},[n("span",null,"# as well.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-client-key-file-pass secret")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configure a DH parameters file to enable Diffie-Hellman (DH) key exchange,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# required by older versions of OpenSSL (<3.0). Newer versions do not require")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this configuration and recommend against it.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-dh-params-file redis.dh")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configure a CA certificate(s) bundle or directory to authenticate TLS/SSL")]),s(`
`),n("span",{class:"line"},[n("span",null,"# clients and peers.  Redis requires an explicit configuration of at least one")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of these, and will not implicitly use the system wide configuration.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-ca-cert-file ca.crt")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-ca-cert-dir /etc/ssl/certs")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, clients (including replica servers) on a TLS port are required")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to authenticate using valid client side certificates.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If "no" is specified, client certificates are not required and not accepted.')]),s(`
`),n("span",{class:"line"},[n("span",null,'# If "optional" is specified, client certificates are accepted and must be')]),s(`
`),n("span",{class:"line"},[n("span",null,"# valid if provided, but are not required.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-auth-clients no")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-auth-clients optional")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, a Redis replica does not attempt to establish a TLS connection")]),s(`
`),n("span",{class:"line"},[n("span",null,"# with its master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Use the following directive to enable TLS on replication links.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-replication yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, the Redis Cluster bus uses a plain TCP connection. To enable")]),s(`
`),n("span",{class:"line"},[n("span",null,"# TLS for the bus protocol, use the following directive:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-cluster yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, only TLSv1.2 and TLSv1.3 are enabled and it is highly recommended")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that older formally deprecated versions are kept disabled to reduce the attack surface.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can explicitly specify TLS versions to support.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Allowed values are case insensitive and include "TLSv1", "TLSv1.1", "TLSv1.2",')]),s(`
`),n("span",{class:"line"},[n("span",null,'# "TLSv1.3" (OpenSSL >= 1.1.1) or any combination.')]),s(`
`),n("span",{class:"line"},[n("span",null,"# To enable only TLSv1.2 and TLSv1.3, use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# tls-protocols "TLSv1.2 TLSv1.3"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configure allowed ciphers.  See the ciphers(1ssl) manpage for more information")]),s(`
`),n("span",{class:"line"},[n("span",null,"# about the syntax of this string.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note: this configuration applies only to <= TLSv1.2.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-ciphers DEFAULT:!MEDIUM")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Configure allowed TLSv1.3 ciphersuites.  See the ciphers(1ssl) manpage for more")]),s(`
`),n("span",{class:"line"},[n("span",null,"# information about the syntax of this string, and specifically for TLSv1.3")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ciphersuites.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-ciphersuites TLS_CHACHA20_POLY1305_SHA256")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When choosing a cipher, use the server's preference instead of the client")]),s(`
`),n("span",{class:"line"},[n("span",null,"# preference. By default, the server follows the client's preference.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-prefer-server-ciphers yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, TLS session caching is enabled to allow faster and less expensive")]),s(`
`),n("span",{class:"line"},[n("span",null,"# reconnections by clients that support it. Use the following directive to disable")]),s(`
`),n("span",{class:"line"},[n("span",null,"# caching.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-session-caching no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Change the default number of TLS sessions cached. A zero value sets the cache")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to unlimited size. The default size is 20480.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-session-cache-size 5000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Change the default timeout of cached TLS sessions. The default timeout is 300")]),s(`
`),n("span",{class:"line"},[n("span",null,"# seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tls-session-cache-timeout 60")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################# GENERAL #####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default Redis does not run as a daemon. Use 'yes' if you need it.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When Redis is supervised by upstart or systemd, this parameter has no impact.")]),s(`
`),n("span",{class:"line"},[n("span",null,"daemonize no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If you run Redis from upstart or systemd, Redis can interact with your")]),s(`
`),n("span",{class:"line"},[n("span",null,"# supervision tree. Options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   supervised no      - no supervision interaction")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode")]),s(`
`),n("span",{class:"line"},[n("span",null,'#                        requires "expect stop" in your upstart job config')]),s(`
`),n("span",{class:"line"},[n("span",null,"#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        on startup, and updating Redis status on a regular")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        basis.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   supervised auto    - detect upstart or systemd method based on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        UPSTART_JOB or NOTIFY_SOCKET environment variables")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Note: these supervision methods only signal "process is ready."')]),s(`
`),n("span",{class:"line"},[n("span",null,"#       They do not enable continuous pings back to your supervisor.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# The default is "no". To run under upstart/systemd, you can simply uncomment')]),s(`
`),n("span",{class:"line"},[n("span",null,"# the line below:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# supervised auto")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If a pid file is specified, Redis writes it where specified at startup")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and removes it at exit.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When the server runs non daemonized, no pid file is created if none is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# specified in the configuration. When the server is daemonized, the pid file")]),s(`
`),n("span",{class:"line"},[n("span",null,'# is used even if not specified, defaulting to "/var/run/redis.pid".')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Creating a pid file is best effort: if Redis is not able to create it")]),s(`
`),n("span",{class:"line"},[n("span",null,"# nothing bad happens, the server will start and run normally.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Note that on modern Linux systems "/run/redis.pid" is more conforming')]),s(`
`),n("span",{class:"line"},[n("span",null,"# and should be used instead.")]),s(`
`),n("span",{class:"line"},[n("span",null,"pidfile /var/run/redis_6379.pid")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify the server verbosity level.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This can be one of:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# debug (a lot of information, useful for development/testing)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# verbose (many rarely useful info, but not a mess like the debug level)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# notice (moderately verbose, what you want in production probably)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# warning (only very important / critical messages are logged)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# nothing (nothing is logged)")]),s(`
`),n("span",{class:"line"},[n("span",null,"loglevel notice")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify the log file name. Also the empty string can be used to force")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis to log on the standard output. Note that if you use standard")]),s(`
`),n("span",{class:"line"},[n("span",null,"# output for logging but daemonize, logs will be sent to /dev/null")]),s(`
`),n("span",{class:"line"},[n("span",null,'logfile ""')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# To enable logging to the system logger, just set 'syslog-enabled' to yes,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and optionally update the other syslog parameters to suit your needs.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# syslog-enabled no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify the syslog identity.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# syslog-ident redis")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# syslog-facility local0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# To disable the built in crash log, which will possibly produce cleaner core")]),s(`
`),n("span",{class:"line"},[n("span",null,"# dumps when they are needed, uncomment the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# crash-log-enabled no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# To disable the fast memory check that's run as part of the crash log, which")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will possibly let redis terminate sooner, uncomment the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# crash-memcheck-enabled no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set the number of databases. The default database is DB 0, you can select")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a different one on a per-connection basis using SELECT <dbid> where")]),s(`
`),n("span",{class:"line"},[n("span",null,"# dbid is a number between 0 and 'databases'-1")]),s(`
`),n("span",{class:"line"},[n("span",null,"databases 16")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default Redis shows an ASCII art logo only when started to log to the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# standard output and if the standard output is a TTY and syslog logging is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disabled. Basically this means that normally a logo is displayed only in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# interactive sessions.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However it is possible to force the pre-4.0 behavior and always show a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ASCII art logo in startup logs by setting the following option to yes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"always-show-logo no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# To avoid logging personal identifiable information (PII) into server log file,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# uncomment the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# hide-user-data-from-log yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, Redis modifies the process title (as seen in 'top' and 'ps') to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# provide some runtime information. It is possible to disable this and leave")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the process name as executed by setting the following to no.")]),s(`
`),n("span",{class:"line"},[n("span",null,"set-proc-title yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When changing the process title, Redis uses the following template to construct")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the modified title.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Template variables are specified in curly brackets. The following variables are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# supported:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# {title}           Name of process as executed if parent, or type of child process.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# {listen-addr}     Bind address or '*' followed by TCP or TLS port listening on, or")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                   Unix socket if only that's available.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# {server-mode}     Special mode, i.e. "[sentinel]" or "[cluster]".')]),s(`
`),n("span",{class:"line"},[n("span",null,"# {port}            TCP port listening on, or 0.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# {tls-port}        TLS port listening on, or 0.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# {unixsocket}      Unix domain socket listening on, or "".')]),s(`
`),n("span",{class:"line"},[n("span",null,"# {config-file}     Name of configuration file used.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'proc-title-template "{title} {listen-addr} {server-mode}"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set the local environment which is used for string comparison operations, and ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# also affect the performance of Lua scripts. Empty String indicates the locale ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is derived from the environment variables.")]),s(`
`),n("span",{class:"line"},[n("span",null,'locale-collate ""')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ SNAPSHOTTING  ################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Save the DB to disk.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# save <seconds> <changes> [<seconds> <changes> ...]")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis will save the DB if the given number of seconds elapsed and it")]),s(`
`),n("span",{class:"line"},[n("span",null,"# surpassed the given number of write operations against the DB.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Snapshotting can be completely disabled with a single empty string argument")]),s(`
`),n("span",{class:"line"},[n("span",null,"# as in following example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# save ""')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Unless specified otherwise, by default Redis will save the DB:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   * After 3600 seconds (an hour) if at least 1 change was performed")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   * After 300 seconds (5 minutes) if at least 100 changes were performed")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   * After 60 seconds if at least 10000 changes were performed")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can set these explicitly by uncommenting the following line.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# save 3600 1 300 100 60 10000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default Redis will stop accepting writes if RDB snapshots are enabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (at least one save point) and the latest background save failed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This will make the user aware (in a hard way) that data is not persisting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# on disk properly, otherwise chances are that no one will notice and some")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disaster will happen.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the background saving process will start working again Redis will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# automatically allow writes again.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However if you have setup your proper monitoring of the Redis server")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and persistence, you may want to disable this feature so that Redis will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# continue to work as usual even if there are problems with disk,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# permissions, and so forth.")]),s(`
`),n("span",{class:"line"},[n("span",null,"stop-writes-on-bgsave-error yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Compress string objects using LZF when dump .rdb databases?")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default compression is enabled as it's almost always a win.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If you want to save some CPU in the saving child set it to 'no' but")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the dataset will likely be bigger if you have compressible values or keys.")]),s(`
`),n("span",{class:"line"},[n("span",null,"rdbcompression yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Since version 5 of RDB a CRC64 checksum is placed at the end of the file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This makes the format more resistant to corruption but there is a performance")]),s(`
`),n("span",{class:"line"},[n("span",null,"# hit to pay (around 10%) when saving and loading RDB files, so you can disable it")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for maximum performances.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# RDB files created with checksum disabled have a checksum of zero that will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tell the loading code to skip the check.")]),s(`
`),n("span",{class:"line"},[n("span",null,"rdbchecksum yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Enables or disables full sanitization checks for ziplist and listpack etc when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# loading an RDB or RESTORE payload. This reduces the chances of a assertion or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# crash later on while processing commands.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   no         - Never perform full sanitization")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   yes        - Always perform full sanitization")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   clients    - Perform full sanitization only for user connections.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                Excludes: RDB files, RESTORE commands received from the master")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                connection, and client connections which have the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                skip-sanitize-payload ACL flag.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default should be 'clients' but since it currently affects cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"# resharding via MIGRATE, it is temporarily set to 'no' by default.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# sanitize-dump-payload no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The filename where to dump the DB")]),s(`
`),n("span",{class:"line"},[n("span",null,"dbfilename dump.rdb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Remove RDB files used by replication in instances without persistence")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enabled. By default this option is disabled, however there are environments")]),s(`
`),n("span",{class:"line"},[n("span",null,"# where for regulations or other security concerns, RDB files persisted on")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disk by masters in order to feed replicas, or stored on disk by replicas")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to load them for the initial synchronization, should be deleted")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ASAP. Note that this option ONLY WORKS in instances that have both AOF")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and RDB persistence disabled, otherwise is completely ignored.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# An alternative (and sometimes better) way to obtain the same effect is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to use diskless replication on both master and replicas instances. However")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in the case of replicas, diskless is not always an option.")]),s(`
`),n("span",{class:"line"},[n("span",null,"rdb-del-sync-files no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The working directory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The DB will be written inside this directory, with the filename specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"# above using the 'dbfilename' configuration directive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The Append Only File will also be created inside this directory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that you must specify a directory here, not a file name.")]),s(`
`),n("span",{class:"line"},[n("span",null,"dir /data")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################# REPLICATION #################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Master-Replica replication. Use replicaof to make a Redis instance a copy of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# another Redis server. A few things to understand ASAP about Redis replication.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   +------------------+      +---------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   |      Master      | ---> |    Replica    |")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   | (receive writes) |      |  (exact copy) |")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   +------------------+      +---------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) Redis replication is asynchronous, but you can configure a master to")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    stop accepting writes if it appears to be not connected with at least")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    a given number of replicas.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Redis replicas are able to perform a partial resynchronization with the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    master if the replication link is lost for a relatively small amount of")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    time. You may want to configure the replication backlog size (see the next")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    sections of this file) with a sensible value depending on your needs.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3) Replication is automatic and does not need user intervention. After a")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    network partition replicas automatically try to reconnect to masters")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    and resynchronize with them.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replicaof <masterip> <masterport>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If the master is password protected (using the "requirepass" configuration')]),s(`
`),n("span",{class:"line"},[n("span",null,"# directive below) it is possible to tell the replica to authenticate before")]),s(`
`),n("span",{class:"line"},[n("span",null,"# starting the replication synchronization process, otherwise the master will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# refuse the replica request.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# masterauth <master-password>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However this is not enough if you are using Redis ACLs (for Redis version")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 6 or greater), and the default user is not capable of running the PSYNC")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command and/or other commands needed for replication. In this case it's")]),s(`
`),n("span",{class:"line"},[n("span",null,"# better to configure a special user to use with replication, and specify the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# masteruser configuration as such:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# masteruser <username>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When masteruser is specified, the replica will authenticate against its")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master using the new AUTH form: AUTH <username> <password>.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When a replica loses its connection with the master, or when the replication")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is still in progress, the replica can act in two different ways:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) if replica-serve-stale-data is set to 'yes' (the default) the replica will")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    still reply to client requests, possibly with out of date data, or the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    data set may just be empty if this is the first synchronization.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) If replica-serve-stale-data is set to 'no' the replica will reply with error")]),s(`
`),n("span",{class:"line"},[n("span",null,`#    "MASTERDOWN Link with MASTER is down and replica-serve-stale-data is set to 'no'"`)]),s(`
`),n("span",{class:"line"},[n("span",null,"#    to all data access commands, excluding commands such as:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    INFO, REPLICAOF, AUTH, SHUTDOWN, REPLCONF, ROLE, CONFIG, SUBSCRIBE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB, COMMAND, POST,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    HOST and LATENCY.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"replica-serve-stale-data yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can configure a replica instance to accept writes or not. Writing against")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a replica instance may be useful to store some ephemeral data (because data")]),s(`
`),n("span",{class:"line"},[n("span",null,"# written on a replica will be easily deleted after resync with the master) but")]),s(`
`),n("span",{class:"line"},[n("span",null,"# may also cause problems if clients are writing to it because of a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# misconfiguration.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Since Redis 2.6 by default replicas are read-only.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note: read only replicas are not designed to be exposed to untrusted clients")]),s(`
`),n("span",{class:"line"},[n("span",null,"# on the internet. It's just a protection layer against misuse of the instance.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Still a read only replica exports by default all the administrative commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"# such as CONFIG, DEBUG, and so forth. To a limited extent you can improve")]),s(`
`),n("span",{class:"line"},[n("span",null,"# security of read only replicas using 'rename-command' to shadow all the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# administrative / dangerous commands.")]),s(`
`),n("span",{class:"line"},[n("span",null,"replica-read-only yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Replication SYNC strategy: disk or socket.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# New replicas and reconnecting replicas that are not able to continue the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replication process just receiving differences, need to do what is called a")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "full synchronization". An RDB file is transmitted from the master to the')]),s(`
`),n("span",{class:"line"},[n("span",null,"# replicas.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The transmission can happen in two different ways:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) Disk-backed: The Redis master creates a new process that writes the RDB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 file on disk. Later the file is transferred by the parent")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 process to the replicas incrementally.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Diskless: The Redis master creates a new process that directly writes the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#              RDB file to replica sockets, without touching the disk at all.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# With disk-backed replication, while the RDB file is generated, more replicas")]),s(`
`),n("span",{class:"line"},[n("span",null,"# can be queued and served with the RDB file as soon as the current child")]),s(`
`),n("span",{class:"line"},[n("span",null,"# producing the RDB file finishes its work. With diskless replication instead")]),s(`
`),n("span",{class:"line"},[n("span",null,"# once the transfer starts, new replicas arriving will be queued and a new")]),s(`
`),n("span",{class:"line"},[n("span",null,"# transfer will start when the current one terminates.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When diskless replication is used, the master waits a configurable amount of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# time (in seconds) before starting the transfer in the hope that multiple")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replicas will arrive and the transfer can be parallelized.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# With slow disks and fast (large bandwidth) networks, diskless replication")]),s(`
`),n("span",{class:"line"},[n("span",null,"# works better.")]),s(`
`),n("span",{class:"line"},[n("span",null,"repl-diskless-sync yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When diskless replication is enabled, it is possible to configure the delay")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server waits in order to spawn the child that transfers the RDB via socket")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to the replicas.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is important since once the transfer starts, it is not possible to serve")]),s(`
`),n("span",{class:"line"},[n("span",null,"# new replicas arriving, that will be queued for the next RDB transfer, so the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# server waits a delay in order to let more replicas arrive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The delay is specified in seconds, and by default is 5 seconds. To disable")]),s(`
`),n("span",{class:"line"},[n("span",null,"# it entirely just set it to 0 seconds and the transfer will start ASAP.")]),s(`
`),n("span",{class:"line"},[n("span",null,"repl-diskless-sync-delay 5")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When diskless replication is enabled with a delay, it is possible to let")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the replication start before the maximum delay is reached if the maximum")]),s(`
`),n("span",{class:"line"},[n("span",null,"# number of replicas expected have connected. Default of 0 means that the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maximum is not defined and Redis will wait the full delay.")]),s(`
`),n("span",{class:"line"},[n("span",null,"repl-diskless-sync-max-replicas 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -----------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# WARNING: Since in this setup the replica does not immediately store an RDB on")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disk, it may cause data loss during failovers. RDB diskless load + Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# modules not handling I/O reads may cause Redis to abort in case of I/O errors")]),s(`
`),n("span",{class:"line"},[n("span",null,"# during the initial synchronization stage with the master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -----------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Replica can load the RDB it reads from the replication link directly from the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# socket, or store the RDB to a file and read that file after it was completely")]),s(`
`),n("span",{class:"line"},[n("span",null,"# received from the master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In many cases the disk is slower than the network, and storing and loading")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the RDB file may increase replication time (and even increase the master's")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Copy on Write memory and replica buffers).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However, when parsing the RDB file directly from the socket, in order to avoid")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data loss it's only safe to flush the current dataset when the new dataset is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# fully loaded in memory, resulting in higher memory usage.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For this reason we have the following options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,`# "disabled"    - Don't use diskless load (store the rdb file to the disk first)`)]),s(`
`),n("span",{class:"line"},[n("span",null,'# "swapdb"      - Keep current db contents in RAM while parsing the data directly')]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 from the socket. Replicas in this mode can keep serving current")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 dataset while replication is in progress, except for cases where")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 they can't recognize master as having a data set from same")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 replication history.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 Note that this requires sufficient memory, if you don't have it,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 you risk an OOM kill.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "on-empty-db" - Use diskless load only when current dataset is empty. This is ')]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 safer and avoid having old and new dataset loaded side by side")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                 during replication.")]),s(`
`),n("span",{class:"line"},[n("span",null,"repl-diskless-load disabled")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Master send PINGs to its replicas in a predefined interval. It's possible to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# change this interval with the repl_ping_replica_period option. The default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# value is 10 seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# repl-ping-replica-period 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The following option sets the replication timeout for:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) Bulk transfer I/O during SYNC, from the point of view of replica.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Master timeout from the point of view of replicas (data, pings).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3) Replica timeout from the point of view of masters (REPLCONF ACK pings).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is important to make sure that this value is greater than the value")]),s(`
`),n("span",{class:"line"},[n("span",null,"# specified for repl-ping-replica-period otherwise a timeout will be detected")]),s(`
`),n("span",{class:"line"},[n("span",null,"# every time there is low traffic between the master and the replica. The default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# value is 60 seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# repl-timeout 60")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Disable TCP_NODELAY on the replica socket after SYNC?")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If you select "yes" Redis will use a smaller number of TCP packets and')]),s(`
`),n("span",{class:"line"},[n("span",null,"# less bandwidth to send data to replicas. But this can add a delay for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the data to appear on the replica side, up to 40 milliseconds with")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Linux kernels using a default configuration.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If you select "no" the delay for data to appear on the replica side will')]),s(`
`),n("span",{class:"line"},[n("span",null,"# be reduced but more bandwidth will be used for replication.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default we optimize for low latency, but in very high traffic conditions")]),s(`
`),n("span",{class:"line"},[n("span",null,'# or when the master and replicas are many hops away, turning this to "yes" may')]),s(`
`),n("span",{class:"line"},[n("span",null,"# be a good idea.")]),s(`
`),n("span",{class:"line"},[n("span",null,"repl-disable-tcp-nodelay no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set the replication backlog size. The backlog is a buffer that accumulates")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica data when replicas are disconnected for some time, so that when a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica wants to reconnect again, often a full resync is not needed, but a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# partial resync is enough, just passing the portion of data the replica")]),s(`
`),n("span",{class:"line"},[n("span",null,"# missed while disconnected.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The bigger the replication backlog, the longer the replica can endure the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disconnect and later be able to perform a partial resynchronization.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The backlog is only allocated if there is at least one replica connected.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# repl-backlog-size 1mb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# After a master has no connected replicas for some time, the backlog will be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# freed. The following option configures the amount of seconds that need to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# elapse, starting from the time the last replica disconnected, for the backlog")]),s(`
`),n("span",{class:"line"},[n("span",null,"# buffer to be freed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that replicas never free the backlog for timeout, since they may be")]),s(`
`),n("span",{class:"line"},[n("span",null,'# promoted to masters later, and should be able to correctly "partially')]),s(`
`),n("span",{class:"line"},[n("span",null,'# resynchronize" with other replicas: hence they should always accumulate backlog.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A value of 0 means to never release the backlog.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# repl-backlog-ttl 3600")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The replica priority is an integer number published by Redis in the INFO")]),s(`
`),n("span",{class:"line"},[n("span",null,"# output. It is used by Redis Sentinel in order to select a replica to promote")]),s(`
`),n("span",{class:"line"},[n("span",null,"# into a master if the master is no longer working correctly.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A replica with a low priority number is considered better for promotion, so")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for instance if there are three replicas with priority 10, 100, 25 Sentinel")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will pick the one with priority 10, that is the lowest.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However a special priority of 0 marks the replica as not able to perform the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# role of master, so a replica with priority of 0 will never be selected by")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis Sentinel for promotion.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default the priority is 100.")]),s(`
`),n("span",{class:"line"},[n("span",null,"replica-priority 100")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The propagation error behavior controls how Redis will behave when it is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# unable to handle a command being processed in the replication stream from a master")]),s(`
`),n("span",{class:"line"},[n("span",null,"# or processed while reading from an AOF file. Errors that occur during propagation")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are unexpected, and can cause data inconsistency. However, there are edge cases")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in earlier versions of Redis where it was possible for the server to replicate or persist")]),s(`
`),n("span",{class:"line"},[n("span",null,"# commands that would fail on future versions. For this reason the default behavior")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is to ignore such errors and continue processing commands.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If an application wants to ensure there is no data divergence, this configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# should be set to 'panic' instead. The value can also be set to 'panic-on-replicas'")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to only panic when a replica encounters an error on the replication stream. One of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# these two panic values will become the default value in the future once there are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# sufficient safety mechanisms in place to prevent false positive crashes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# propagation-error-behavior ignore")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Replica ignore disk write errors controls the behavior of a replica when it is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# unable to persist a write command received from its master to disk. By default,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this configuration is set to 'no' and will crash the replica in this condition.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is not recommended to change this default, however in order to be compatible")]),s(`
`),n("span",{class:"line"},[n("span",null,"# with older versions of Redis this config can be toggled to 'yes' which will just")]),s(`
`),n("span",{class:"line"},[n("span",null,"# log a warning and execute the write command it got from the master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-ignore-disk-write-errors no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -----------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, Redis Sentinel includes all replicas in its reports. A replica")]),s(`
`),n("span",{class:"line"},[n("span",null,"# can be excluded from Redis Sentinel's announcements. An unannounced replica")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will be ignored by the 'sentinel replicas <master>' command and won't be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# exposed to Redis Sentinel's clients.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option does not change the behavior of replica-priority. Even with")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-announced set to 'no', the replica can be promoted to master. To")]),s(`
`),n("span",{class:"line"},[n("span",null,"# prevent this behavior, set replica-priority to 0.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-announced yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is possible for a master to stop accepting writes if there are less than")]),s(`
`),n("span",{class:"line"},[n("span",null,"# N replicas connected, having a lag less or equal than M seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# The N replicas need to be in "online" state.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The lag in seconds, that must be <= the specified value, is calculated from")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the last ping received from the replica, that is usually sent every second.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option does not GUARANTEE that N replicas will accept the write, but")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will limit the window of exposure for lost writes in case not enough replicas")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are available, to the specified number of seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For example to require at least 3 replicas with a lag <= 10 seconds use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# min-replicas-to-write 3")]),s(`
`),n("span",{class:"line"},[n("span",null,"# min-replicas-max-lag 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Setting one or the other to 0 disables the feature.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default min-replicas-to-write is set to 0 (feature disabled) and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# min-replicas-max-lag is set to 10.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A Redis master is able to list the address and port of the attached")]),s(`
`),n("span",{class:"line"},[n("span",null,'# replicas in different ways. For example the "INFO replication" section')]),s(`
`),n("span",{class:"line"},[n("span",null,"# offers this information, which is used, among other tools, by")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis Sentinel in order to discover replica instances.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Another place where this info is available is in the output of the")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "ROLE" command of a master.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The listed IP address and port normally reported by a replica is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# obtained in the following way:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   IP: The address is auto detected by checking the peer address")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   of the socket used by the replica to connect with the master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   Port: The port is communicated by the replica during the replication")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   handshake, and is normally the port that the replica is using to")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   listen for connections.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However when port forwarding or Network Address Translation (NAT) is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# used, the replica may actually be reachable via different IP and port")]),s(`
`),n("span",{class:"line"},[n("span",null,"# pairs. The following two options can be used by a replica in order to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# report to its master a specific set of IP and port, so that both INFO")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and ROLE will report those values.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# There is no need to use both the options if you need to override just")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the port or the IP address.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-announce-ip 5.5.5.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-announce-port 1234")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################### KEYS TRACKING #################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis implements server assisted support for client side caching of values.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is implemented using an invalidation table that remembers, using")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a radix key indexed by key name, what clients have which keys. In turn")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this is used in order to send invalidation messages to clients. Please")]),s(`
`),n("span",{class:"line"},[n("span",null,"# check this page to understand more about the feature:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   https://redis.io/topics/client-side-caching")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When tracking is enabled for a client, all the read only queries are assumed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to be cached: this will force Redis to store information in the invalidation")]),s(`
`),n("span",{class:"line"},[n("span",null,"# table. When keys are modified, such information is flushed away, and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# invalidation messages are sent to the clients. However if the workload is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# heavily dominated by reads, Redis could use more and more memory in order")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to track the keys fetched by many clients.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For this reason it is possible to configure a maximum fill value for the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# invalidation table. By default it is set to 1M of keys, and once this limit")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is reached, Redis will start to evict keys in the invalidation table")]),s(`
`),n("span",{class:"line"},[n("span",null,"# even if they were not modified, just to reclaim memory: this will in turn")]),s(`
`),n("span",{class:"line"},[n("span",null,"# force the clients to invalidate the cached values. Basically the table")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maximum size is a trade off between the memory you want to spend server")]),s(`
`),n("span",{class:"line"},[n("span",null,"# side to track information about who cached what, and the ability of clients")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to retain cached objects in memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If you set the value to 0, it means there are no limits, and Redis will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# retain as many keys as needed in the invalidation table.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# In the "stats" INFO section, you can find information about the number of')]),s(`
`),n("span",{class:"line"},[n("span",null,"# keys in the invalidation table at every given moment.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note: when key tracking is used in broadcasting mode, no memory is used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in the server side so this setting is useless.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tracking-table-max-keys 1000000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################## SECURITY ###################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Warning: since Redis is pretty fast, an outside user can try up to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1 million passwords per second against a modern box. This means that you")]),s(`
`),n("span",{class:"line"},[n("span",null,"# should use very strong passwords, otherwise they will be very easy to break.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that because the password is really a shared secret between the client")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and the server, and should not be memorized by any human, the password")]),s(`
`),n("span",{class:"line"},[n("span",null,"# can be easily a long string from /dev/urandom or whatever, so by using a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# long and unguessable password no brute force attack will be possible.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis ACL users are defined in the following format:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   user <username> ... acl rules ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   user worker +@list +@connection ~jobs:* on >ffa9203c493aa99")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# The special username "default" is used for new connections. If this user')]),s(`
`),n("span",{class:"line"},[n("span",null,'# has the "nopass" rule, then new connections will be immediately authenticated')]),s(`
`),n("span",{class:"line"},[n("span",null,'# as the "default" user without the need of any password provided via the')]),s(`
`),n("span",{class:"line"},[n("span",null,'# AUTH command. Otherwise if the "default" user is not flagged with "nopass"')]),s(`
`),n("span",{class:"line"},[n("span",null,"# the connections will start in not authenticated state, and will require")]),s(`
`),n("span",{class:"line"},[n("span",null,"# AUTH (or the HELLO command AUTH option) in order to be authenticated and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# start to work.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The ACL rules that describe what a user can do are the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  on           Enable the user: it is possible to authenticate as this user.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  off          Disable the user: it's no longer possible to authenticate")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               with this user, however the already authenticated connections")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               will still work.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  skip-sanitize-payload    RESTORE dump-payload sanitization is skipped.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  sanitize-payload         RESTORE dump-payload is sanitized (default).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  +<command>   Allow the execution of that command.")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               May be used with `|` for allowing subcommands (e.g "+config|get")')]),s(`
`),n("span",{class:"line"},[n("span",null,"#  -<command>   Disallow the execution of that command.")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               May be used with `|` for blocking subcommands (e.g "-config|set")')]),s(`
`),n("span",{class:"line"},[n("span",null,"#  +@<category> Allow the execution of all the commands in such category")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               with valid categories are like @admin, @set, @sortedset, ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               and so forth, see the full list in the server.c file where")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               the Redis command table is described and defined.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               The special category @all means all the commands, but currently")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               present in the server, and that will be loaded in the future")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               via modules.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  +<command>|first-arg  Allow a specific first argument of an otherwise")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        disabled command. It is only supported on commands with")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        no sub-commands, and is not allowed as negative form")]),s(`
`),n("span",{class:"line"},[n("span",null,'#                        like -SELECT|1, only additive starting with "+". This')]),s(`
`),n("span",{class:"line"},[n("span",null,"#                        feature is deprecated and may be removed in the future.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  allcommands  Alias for +@all. Note that it implies the ability to execute")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               all the future commands loaded via the modules system.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  nocommands   Alias for -@all.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  ~<pattern>   Add a pattern of keys that can be mentioned as part of")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               commands. For instance ~* allows all the keys. The pattern")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               is a glob-style pattern like the one of KEYS.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               It is possible to specify multiple patterns.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# %R~<pattern>  Add key read pattern that specifies which keys can be read ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               from.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# %W~<pattern>  Add key write pattern that specifies which keys can be")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               written to. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  allkeys      Alias for ~*")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  resetkeys    Flush the list of allowed keys patterns.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  &<pattern>   Add a glob-style pattern of Pub/Sub channels that can be")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               accessed by the user. It is possible to specify multiple channel")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               patterns.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  allchannels  Alias for &*")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  resetchannels            Flush the list of allowed channel patterns.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  ><password>  Add this password to the list of valid password for the user.")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               For example >mypass will add "mypass" to the list.')]),s(`
`),n("span",{class:"line"},[n("span",null,'#               This directive clears the "nopass" flag (see later).')]),s(`
`),n("span",{class:"line"},[n("span",null,"#  <<password>  Remove this password from the list of valid passwords.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  nopass       All the set passwords of the user are removed, and the user")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               is flagged as requiring no password: it means that every")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               password will work against this user. If this directive is")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               used for the default user, every new connection will be")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               immediately authenticated with the default user without")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               any explicit AUTH command required. Note that the "resetpass"')]),s(`
`),n("span",{class:"line"},[n("span",null,"#               directive will clear this condition.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  resetpass    Flush the list of allowed passwords. Moreover removes the")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               "nopass" status. After "resetpass" the user has no associated')]),s(`
`),n("span",{class:"line"},[n("span",null,"#               passwords and there is no way to authenticate without adding")]),s(`
`),n("span",{class:"line"},[n("span",null,'#               some password (or setting it as "nopass" later).')]),s(`
`),n("span",{class:"line"},[n("span",null,"#  reset        Performs the following actions: resetpass, resetkeys, resetchannels,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               allchannels (if acl-pubsub-default is set), off, clearselectors, -@all.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               The user returns to the same state it has immediately after its creation.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (<options>)   Create a new selector with the options specified within the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               parentheses and attach it to the user. Each option should be ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               space separated. The first character must be ( and the last ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#               character must be ).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# clearselectors            Remove all of the currently attached selectors. ")]),s(`
`),n("span",{class:"line"},[n("span",null,'#                           Note this does not change the "root" user permissions,')]),s(`
`),n("span",{class:"line"},[n("span",null,"#                           which are the permissions directly applied onto the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                           user (outside the parentheses).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ACL rules can be specified in any order: for instance you can start with")]),s(`
`),n("span",{class:"line"},[n("span",null,"# passwords, then flags, or key patterns. However note that the additive")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and subtractive rules will CHANGE MEANING depending on the ordering.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For instance see the following example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   user alice on +@all -DEBUG ~* >somepassword")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# This will allow "alice" to use all the commands with the exception of the')]),s(`
`),n("span",{class:"line"},[n("span",null,"# DEBUG command, since +@all added all the commands to the set of the commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"# alice can use, and later DEBUG was removed. However if we invert the order")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of two ACL rules the result will be different:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   user alice on -DEBUG +@all ~* >somepassword")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Now DEBUG was removed when alice had yet no commands in the set of allowed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# commands, later all the commands are added, so the user will be able to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# execute everything.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Basically ACL rules are processed left-to-right.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The following is a list of command categories and their meanings:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * keyspace - Writing or reading from keys, databases, or their metadata ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     in a type agnostic way. Includes DEL, RESTORE, DUMP, RENAME, EXISTS, DBSIZE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     KEYS, EXPIRE, TTL, FLUSHALL, etc. Commands that may modify the keyspace,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     key or metadata will also have `write` category. Commands that only read")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     the keyspace, key or metadata will have the `read` category.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * read - Reading from keys (values or metadata). Note that commands that don't")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     interact with keys, will not have either `read` or `write`.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * write - Writing to keys (values or metadata)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * admin - Administrative commands. Normal applications will never need to use")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     these. Includes REPLICAOF, CONFIG, DEBUG, SAVE, MONITOR, ACL, SHUTDOWN, etc.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * dangerous - Potentially dangerous (each should be considered with care for")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     various reasons). This includes FLUSHALL, MIGRATE, RESTORE, SORT, KEYS,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     CLIENT, DEBUG, INFO, CONFIG, SAVE, REPLICAOF, etc.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * connection - Commands affecting the connection or other connections.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     This includes AUTH, SELECT, COMMAND, CLIENT, ECHO, PING, etc.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * blocking - Potentially blocking the connection until released by another")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     command.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * fast - Fast O(1) commands. May loop on the number of arguments, but not the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#     number of elements in the key.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * slow - All commands that are not Fast.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * pubsub - PUBLISH / SUBSCRIBE related")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * transaction - WATCH / MULTI / EXEC related commands.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * scripting - Scripting related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * set - Data type: sets related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * sortedset - Data type: zsets related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * list - Data type: lists related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * hash - Data type: hashes related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * string - Data type: strings related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * bitmap - Data type: bitmaps related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * hyperloglog - Data type: hyperloglog related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * geo - Data type: geo related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * stream - Data type: streams related.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For more information about ACL configuration please refer to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the Redis web site at https://redis.io/topics/acl")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ACL LOG")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The ACL Log tracks failed commands and authentication events associated")]),s(`
`),n("span",{class:"line"},[n("span",null,"# with ACLs. The ACL Log is useful to troubleshoot failed commands blocked")]),s(`
`),n("span",{class:"line"},[n("span",null,"# by ACLs. The ACL Log is stored in memory. You can reclaim memory with")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ACL LOG RESET. Define the maximum entry length of the ACL Log below.")]),s(`
`),n("span",{class:"line"},[n("span",null,"acllog-max-len 128")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Using an external ACL file")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Instead of configuring users here in this file, it is possible to use")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a stand-alone file just listing users. The two methods cannot be mixed:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# if you configure users here and at the same time you activate the external")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ACL file, the server will refuse to start.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The format of the external ACL user file is exactly the same as the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# format that is used inside redis.conf to describe users.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# aclfile /etc/redis/users.acl")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'# IMPORTANT NOTE: starting with Redis 6 "requirepass" is just a compatibility')]),s(`
`),n("span",{class:"line"},[n("span",null,"# layer on top of the new ACL system. The option effect will be just setting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the password for the default user. Clients will still authenticate using")]),s(`
`),n("span",{class:"line"},[n("span",null,"# AUTH <password> as usually, or more explicitly with AUTH default <password>")]),s(`
`),n("span",{class:"line"},[n("span",null,"# if they follow the new protocol: both will work.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The requirepass is not compatible with aclfile option and the ACL LOAD")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command, these will cause requirepass to be ignored.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"requirepass admin@123456")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# New users are initialized with restrictive permissions by default, via the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# equivalent of this ACL rule 'off resetkeys -@all'. Starting with Redis 6.2, it")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is possible to manage access to Pub/Sub channels with ACL rules as well. The")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default Pub/Sub channels permission if new users is controlled by the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# acl-pubsub-default configuration directive, which accepts one of these values:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# allchannels: grants access to all Pub/Sub channels")]),s(`
`),n("span",{class:"line"},[n("span",null,"# resetchannels: revokes access to all Pub/Sub channels")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# From Redis 7.0, acl-pubsub-default defaults to 'resetchannels' permission.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# acl-pubsub-default resetchannels")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Command renaming (DEPRECATED).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# WARNING: avoid using this option if possible. Instead use ACLs to remove")]),s(`
`),n("span",{class:"line"},[n("span",null,"# commands from the default user, and put them only in some admin user you")]),s(`
`),n("span",{class:"line"},[n("span",null,"# create for administrative purposes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is possible to change the name of dangerous commands in a shared")]),s(`
`),n("span",{class:"line"},[n("span",null,"# environment. For instance the CONFIG command may be renamed into something")]),s(`
`),n("span",{class:"line"},[n("span",null,"# hard to guess so that it will still be available for internal-use tools")]),s(`
`),n("span",{class:"line"},[n("span",null,"# but not available for general clients.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is also possible to completely kill a command by renaming it into")]),s(`
`),n("span",{class:"line"},[n("span",null,"# an empty string:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# rename-command CONFIG ""')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Please note that changing the name of commands that are logged into the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# AOF file or transmitted to replicas may cause problems.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################### CLIENTS ####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set the max number of connected clients at the same time. By default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this limit is set to 10000 clients, however if the Redis server is not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# able to configure the process file limit to allow for the specified limit")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the max number of allowed clients is set to the current file limit")]),s(`
`),n("span",{class:"line"},[n("span",null,"# minus 32 (as Redis reserves a few file descriptors for internal uses).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Once the limit is reached Redis will close all the new connections sending")]),s(`
`),n("span",{class:"line"},[n("span",null,"# an error 'max number of clients reached'.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# IMPORTANT: When Redis Cluster is used, the max number of connections is also")]),s(`
`),n("span",{class:"line"},[n("span",null,"# shared with the cluster bus: every node in the cluster will use two")]),s(`
`),n("span",{class:"line"},[n("span",null,"# connections, one incoming and another outgoing. It is important to size the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# limit accordingly in case of very large clusters.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxclients 10000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################## MEMORY MANAGEMENT ################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set a memory usage limit to the specified amount of bytes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When the memory limit is reached Redis will try to remove keys")]),s(`
`),n("span",{class:"line"},[n("span",null,"# according to the eviction policy selected (see maxmemory-policy).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If Redis can't remove keys according to the policy, or if the policy is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# set to 'noeviction', Redis will start to reply with errors to commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that would use more memory, like SET, LPUSH, and so on, and will continue")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to reply to read-only commands like GET.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option is usually useful when using Redis as an LRU or LFU cache, or to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# set a hard memory limit for an instance (using the 'noeviction' policy).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# WARNING: If you have replicas attached to an instance with maxmemory on,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the size of the output buffers needed to feed the replicas are subtracted")]),s(`
`),n("span",{class:"line"},[n("span",null,"# from the used memory count, so that network problems / resyncs will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# not trigger a loop where keys are evicted, and in turn the output")]),s(`
`),n("span",{class:"line"},[n("span",null,"# buffer of replicas is full with DELs of keys evicted triggering the deletion")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of more keys, and so forth until the database is completely emptied.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In short... if you have replicas attached it is suggested that you set a lower")]),s(`
`),n("span",{class:"line"},[n("span",null,"# limit for maxmemory so that there is some free RAM on the system for replica")]),s(`
`),n("span",{class:"line"},[n("span",null,"# output buffers (but this is not needed if the policy is 'noeviction').")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory <bytes>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# MAXMEMORY POLICY: how Redis will select what to remove when maxmemory")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is reached. You can select one from the following behaviors:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# volatile-lru -> Evict using approximated LRU, only keys with an expire set.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# allkeys-lru -> Evict any key using approximated LRU.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# volatile-lfu -> Evict using approximated LFU, only keys with an expire set.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# allkeys-lfu -> Evict any key using approximated LFU.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# volatile-random -> Remove a random key having an expire set.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# allkeys-random -> Remove a random key, any key.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# volatile-ttl -> Remove the key with the nearest expire time (minor TTL)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# noeviction -> Don't evict anything, just return an error on write operations.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# LRU means Least Recently Used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# LFU means Least Frequently Used")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Both LRU, LFU and volatile-ttl are implemented using approximated")]),s(`
`),n("span",{class:"line"},[n("span",null,"# randomized algorithms.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note: with any of the above policies, when there are no suitable keys for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# eviction, Redis will return an error on write operations that require")]),s(`
`),n("span",{class:"line"},[n("span",null,"# more memory. These are usually commands that create new keys, add data or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# modify existing keys. A few examples are: SET, INCR, HSET, LPUSH, SUNIONSTORE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# SORT (due to the STORE argument), and EXEC (if the transaction includes any")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command that requires memory).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default is:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory-policy noeviction")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# LRU, LFU and minimal TTL algorithms are not precise algorithms but approximated")]),s(`
`),n("span",{class:"line"},[n("span",null,"# algorithms (in order to save memory), so you can tune it for speed or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# accuracy. By default Redis will check five keys and pick the one that was")]),s(`
`),n("span",{class:"line"},[n("span",null,"# used least recently, you can change the sample size using the following")]),s(`
`),n("span",{class:"line"},[n("span",null,"# configuration directive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default of 5 produces good enough results. 10 Approximates very closely")]),s(`
`),n("span",{class:"line"},[n("span",null,"# true LRU but costs more CPU. 3 is faster but not very accurate. The maximum")]),s(`
`),n("span",{class:"line"},[n("span",null,"# value that can be set is 64.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory-samples 5")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Eviction processing is designed to function well with the default setting.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If there is an unusually large amount of write traffic, this value may need to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# be increased.  Decreasing this value may reduce latency at the risk of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# eviction processing effectiveness")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   0 = minimum latency, 10 = default, 100 = process without regard to latency")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory-eviction-tenacity 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Starting from Redis 5, by default a replica will ignore its maxmemory setting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (unless it is promoted to master after a failover or manually). It means")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that the eviction of keys will be just handled by the master, sending the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# DEL commands to the replica as keys evict in the master side.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This behavior ensures that masters and replicas stay consistent, and is usually")]),s(`
`),n("span",{class:"line"},[n("span",null,"# what you want, however if your replica is writable, or you want the replica")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to have a different memory setting, and you are sure all the writes performed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to the replica are idempotent, then you may change this default (but be sure")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to understand what you are doing).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that since the replica by default does not evict, it may end using more")]),s(`
`),n("span",{class:"line"},[n("span",null,"# memory than the one set via maxmemory (there are certain buffers that may")]),s(`
`),n("span",{class:"line"},[n("span",null,"# be larger on the replica, or data structures may sometimes take more memory")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and so forth). So make sure you monitor your replicas and make sure they")]),s(`
`),n("span",{class:"line"},[n("span",null,"# have enough memory to never hit a real out-of-memory condition before the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master hits the configured maxmemory setting.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica-ignore-maxmemory yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis reclaims expired keys in two ways: upon access when those keys are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# found to be expired, and also in background, in what is called the")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "active expire key". The key space is slowly and interactively scanned')]),s(`
`),n("span",{class:"line"},[n("span",null,"# looking for expired keys to reclaim, so that it is possible to free memory")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of keys that are expired and will never be accessed again in a short time.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default effort of the expire cycle will try to avoid having more than")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ten percent of expired keys still in memory, and will try to avoid consuming")]),s(`
`),n("span",{class:"line"},[n("span",null,"# more than 25% of total memory and to add latency to the system. However")]),s(`
`),n("span",{class:"line"},[n("span",null,'# it is possible to increase the expire "effort" that is normally set to')]),s(`
`),n("span",{class:"line"},[n("span",null,'# "1", to a greater value, up to the value "10". At its maximum value the')]),s(`
`),n("span",{class:"line"},[n("span",null,"# system will use more CPU, longer cycles (and technically may introduce")]),s(`
`),n("span",{class:"line"},[n("span",null,"# more latency), and will tolerate less already expired keys still present")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in the system. It's a tradeoff between memory, CPU and latency.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-expire-effort 1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################# LAZY FREEING ####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis has two primitives to delete keys. One is called DEL and is a blocking")]),s(`
`),n("span",{class:"line"},[n("span",null,"# deletion of the object. It means that the server stops processing new commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to reclaim all the memory associated with an object in a synchronous")]),s(`
`),n("span",{class:"line"},[n("span",null,"# way. If the key deleted is associated with a small object, the time needed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to execute the DEL command is very small and comparable to most other")]),s(`
`),n("span",{class:"line"},[n("span",null,"# O(1) or O(log_N) commands in Redis. However if the key is associated with an")]),s(`
`),n("span",{class:"line"},[n("span",null,"# aggregated value containing millions of elements, the server can block for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a long time (even seconds) in order to complete the operation.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For the above reasons Redis also offers non blocking deletion primitives")]),s(`
`),n("span",{class:"line"},[n("span",null,"# such as UNLINK (non blocking DEL) and the ASYNC option of FLUSHALL and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# FLUSHDB commands, in order to reclaim memory in background. Those commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are executed in constant time. Another thread will incrementally free the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# object in the background as fast as possible.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# DEL, UNLINK and ASYNC option of FLUSHALL and FLUSHDB are user-controlled.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It's up to the design of the application to understand when it is a good")]),s(`
`),n("span",{class:"line"},[n("span",null,"# idea to use one or the other. However the Redis server sometimes has to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# delete keys or flush the whole database as a side effect of other operations.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specifically Redis deletes objects independently of a user call in the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# following scenarios:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) On eviction, because of the maxmemory and maxmemory policy configurations,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    in order to make room for new data, without going over the specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    memory limit.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Because of expire: when a key with an associated time to live (see the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    EXPIRE command) must be deleted from memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3) Because of a side effect of a command that stores data on a key that may")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    already exist. For example the RENAME command may delete the old key")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    content when it is replaced with another one. Similarly SUNIONSTORE")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    or SORT with STORE option may delete existing keys. The SET command")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    itself removes any old content of the specified key in order to replace")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    it with the specified string.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 4) During replication, when a replica performs a full resynchronization with")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    its master, the content of the whole database is removed in order to")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    load the RDB file just transferred.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In all the above cases the default is to delete objects in a blocking way,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# like if DEL was called. However you can configure each case specifically")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to instead release memory in a non-blocking way like if UNLINK")]),s(`
`),n("span",{class:"line"},[n("span",null,"# was called, using the following configuration directives.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"lazyfree-lazy-eviction no")]),s(`
`),n("span",{class:"line"},[n("span",null,"lazyfree-lazy-expire no")]),s(`
`),n("span",{class:"line"},[n("span",null,"lazyfree-lazy-server-del no")]),s(`
`),n("span",{class:"line"},[n("span",null,"replica-lazy-flush no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is also possible, for the case when to replace the user code DEL calls")]),s(`
`),n("span",{class:"line"},[n("span",null,"# with UNLINK calls is not easy, to modify the default behavior of the DEL")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command to act exactly like UNLINK, using the following configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# directive:")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"lazyfree-lazy-user-del no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# FLUSHDB, FLUSHALL, SCRIPT FLUSH and FUNCTION FLUSH support both asynchronous and synchronous")]),s(`
`),n("span",{class:"line"},[n("span",null,"# deletion, which can be controlled by passing the [SYNC|ASYNC] flags into the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# commands. When neither flag is passed, this directive will be used to determine")]),s(`
`),n("span",{class:"line"},[n("span",null,"# if the data should be deleted asynchronously.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"lazyfree-lazy-user-flush no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ THREADED I/O #################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis is mostly single threaded, however there are certain threaded")]),s(`
`),n("span",{class:"line"},[n("span",null,"# operations such as UNLINK, slow I/O accesses and other things that are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# performed on side threads.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Now it is also possible to handle Redis clients socket reads and writes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in different I/O threads. Since especially writing is so slow, normally")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis users use pipelining in order to speed up the Redis performances per")]),s(`
`),n("span",{class:"line"},[n("span",null,"# core, and spawn multiple instances in order to scale more. Using I/O")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threads it is possible to easily speedup two times Redis without resorting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to pipelining nor sharding of the instance.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default threading is disabled, we suggest enabling it only in machines")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that have at least 4 or more cores, leaving at least one spare core.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Using more than 8 threads is unlikely to help much. We also recommend using")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threaded I/O only if you actually have performance problems, with Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instances being able to use a quite big percentage of CPU time, otherwise")]),s(`
`),n("span",{class:"line"},[n("span",null,"# there is no point in using this feature.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# So for instance if you have a four cores boxes, try to use 2 or 3 I/O")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threads, if you have a 8 cores, try to use 6 threads. In order to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enable I/O threads use the following configuration directive:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# io-threads 4")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Setting io-threads to 1 will just use the main thread as usual.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When I/O threads are enabled, we only use threads for writes, that is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to thread the write(2) syscall and transfer the client buffers to the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# socket. However it is also possible to enable threading of reads and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# protocol parsing using the following configuration directive, by setting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# it to yes:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# io-threads-do-reads no")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Usually threading reads doesn't help much.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# NOTE 1: This configuration directive cannot be changed at runtime via")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CONFIG SET. Also, this feature currently does not work when SSL is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# enabled.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# NOTE 2: If you want to test the Redis speedup using redis-benchmark, make")]),s(`
`),n("span",{class:"line"},[n("span",null,"# sure you also run the benchmark itself in threaded mode, using the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# --threads option to match the number of Redis threads, otherwise you'll not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# be able to notice the improvements.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################ KERNEL OOM CONTROL ##############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# On Linux, it is possible to hint the kernel OOM killer on what processes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# should be killed first when out of memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Enabling this feature makes Redis actively control the oom_score_adj value")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for all its processes, depending on their role. The default scores will")]),s(`
`),n("span",{class:"line"},[n("span",null,"# attempt to have background child processes killed before all others, and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replicas killed before masters.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis supports these options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# no:       Don't make changes to oom-score-adj (default).")]),s(`
`),n("span",{class:"line"},[n("span",null,'# yes:      Alias to "relative" see below.')]),s(`
`),n("span",{class:"line"},[n("span",null,"# absolute: Values in oom-score-adj-values are written as is to the kernel.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# relative: Values are used relative to the initial value of oom_score_adj when")]),s(`
`),n("span",{class:"line"},[n("span",null,"#           the server starts and are then clamped to a range of -1000 to 1000.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#           Because typically the initial value is 0, they will often match the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#           absolute values.")]),s(`
`),n("span",{class:"line"},[n("span",null,"oom-score-adj no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When oom-score-adj is used, this directive controls the specific values used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for master, replica and background child processes. Values range -2000 to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2000 (higher means more likely to be killed).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Unprivileged processes (not root, and without CAP_SYS_RESOURCE capabilities)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# can freely increase their value, but not decrease it below its initial")]),s(`
`),n("span",{class:"line"},[n("span",null,'# settings. This means that setting oom-score-adj to "relative" and setting the')]),s(`
`),n("span",{class:"line"},[n("span",null,"# oom-score-adj-values to positive values will always succeed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"oom-score-adj-values 0 200 800")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#################### KERNEL transparent hugepage CONTROL ######################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Usually the kernel Transparent Huge Pages control is set to "madvise" or')]),s(`
`),n("span",{class:"line"},[n("span",null,'# or "never" by default (/sys/kernel/mm/transparent_hugepage/enabled), in which')]),s(`
`),n("span",{class:"line"},[n("span",null,'# case this config has no effect. On systems in which it is set to "always",')]),s(`
`),n("span",{class:"line"},[n("span",null,"# redis will attempt to disable it specifically for the redis process in order")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to avoid latency problems specifically with fork(2) and CoW.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If for some reason you prefer to keep it enabled, you can set this config to")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "no" and the kernel global to "always".')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"disable-thp yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################## APPEND ONLY MODE ###############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default Redis asynchronously dumps the dataset on disk. This mode is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# good enough in many applications, but an issue with the Redis process or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a power outage may result into a few minutes of writes lost (depending on")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the configured save points).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The Append Only File is an alternative persistence mode that provides")]),s(`
`),n("span",{class:"line"},[n("span",null,"# much better durability. For instance using the default data fsync policy")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (see later in the config file) Redis can lose just one second of writes in a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# dramatic event like a server power outage, or a single write if something")]),s(`
`),n("span",{class:"line"},[n("span",null,"# wrong with the Redis process itself happens, but the operating system is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# still running correctly.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# AOF and RDB persistence can be enabled at the same time without problems.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the AOF is enabled on startup Redis will load the AOF, that is the file")]),s(`
`),n("span",{class:"line"},[n("span",null,"# with the better durability guarantees.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that changing this value in a config file of an existing database and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# restarting the server can lead to data loss. A conversion needs to be done")]),s(`
`),n("span",{class:"line"},[n("span",null,"# by setting it via CONFIG command on a live server first.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Please check https://redis.io/topics/persistence for more information.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"appendonly yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The base name of the append only file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis 7 and newer use a set of append-only files to persist the dataset")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and changes applied to it. There are two basic types of files in use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Base files, which are a snapshot representing the complete state of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   dataset at the time the file was created. Base files can be either in")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   the form of RDB (binary serialized) or AOF (textual commands).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Incremental files, which contain additional commands that were applied")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   to the dataset following the previous file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In addition, manifest files are used to track the files and the order in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# which they were created and should be applied.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Append-only file names are created by Redis following a specific pattern.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The file name's prefix is based on the 'appendfilename' configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# parameter, followed by additional information about the sequence and type.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For example, if appendfilename is set to appendonly.aof, the following file")]),s(`
`),n("span",{class:"line"},[n("span",null,"# names could be derived:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - appendonly.aof.1.base.rdb as a base file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - appendonly.aof.1.incr.aof, appendonly.aof.2.incr.aof as incremental files.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - appendonly.aof.manifest as a manifest file.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'appendfilename "appendonly.aof"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For convenience, Redis stores all persistent append-only files in a dedicated")]),s(`
`),n("span",{class:"line"},[n("span",null,"# directory. The name of the directory is determined by the appenddirname")]),s(`
`),n("span",{class:"line"},[n("span",null,"# configuration parameter.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'appenddirname "appendonlydir"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The fsync() call tells the Operating System to actually write data on disk")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instead of waiting for more data in the output buffer. Some OS will really flush")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data on disk, some other OS will just try to do it ASAP.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis supports three different modes:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# no: don't fsync, just let the OS flush the data when it wants. Faster.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# always: fsync after every write to the append only log. Slow, Safest.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# everysec: fsync only one time every second. Compromise.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,`# The default is "everysec", as that's usually the right compromise between`)]),s(`
`),n("span",{class:"line"},[n("span",null,"# speed and data safety. It's up to you to understand if you can relax this to")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "no" that will let the operating system flush the output buffer when')]),s(`
`),n("span",{class:"line"},[n("span",null,"# it wants, for better performances (but if you can live with the idea of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# some data loss consider the default persistence mode that's snapshotting),")]),s(`
`),n("span",{class:"line"},[n("span",null,`# or on the contrary, use "always" that's very slow but a bit safer than`)]),s(`
`),n("span",{class:"line"},[n("span",null,"# everysec.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# More details please check the following article:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# http://antirez.com/post/redis-persistence-demystified.html")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If unsure, use "everysec".')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# appendfsync always")]),s(`
`),n("span",{class:"line"},[n("span",null,"appendfsync everysec")]),s(`
`),n("span",{class:"line"},[n("span",null,"# appendfsync no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When the AOF fsync policy is set to always or everysec, and a background")]),s(`
`),n("span",{class:"line"},[n("span",null,"# saving process (a background save or AOF log background rewriting) is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# performing a lot of I/O against the disk, in some Linux configurations")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis may block too long on the fsync() call. Note that there is no fix for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this currently, as even performing fsync in a different thread will block")]),s(`
`),n("span",{class:"line"},[n("span",null,"# our synchronous write(2) call.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In order to mitigate this problem it's possible to use the following option")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that will prevent fsync() from being called in the main process while a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# BGSAVE or BGREWRITEAOF is in progress.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This means that while another child is saving, the durability of Redis is")]),s(`
`),n("span",{class:"line"},[n("span",null,'# the same as "appendfsync no". In practical terms, this means that it is')]),s(`
`),n("span",{class:"line"},[n("span",null,"# possible to lose up to 30 seconds of log in the worst scenario (with the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default Linux settings).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# If you have latency problems turn this to "yes". Otherwise leave it as')]),s(`
`),n("span",{class:"line"},[n("span",null,'# "no" that is the safest pick from the point of view of durability.')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"no-appendfsync-on-rewrite no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Automatic rewrite of the append only file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis is able to automatically rewrite the log file implicitly calling")]),s(`
`),n("span",{class:"line"},[n("span",null,"# BGREWRITEAOF when the AOF log size grows by the specified percentage.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is how it works: Redis remembers the size of the AOF file after the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# latest rewrite (if no rewrite has happened since the restart, the size of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the AOF at startup is used).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This base size is compared to the current size. If the current size is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bigger than the specified percentage, the rewrite is triggered. Also")]),s(`
`),n("span",{class:"line"},[n("span",null,"# you need to specify a minimal size for the AOF file to be rewritten, this")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is useful to avoid rewriting the AOF file even if the percentage increase")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is reached but it is still pretty small.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Specify a percentage of zero in order to disable the automatic AOF")]),s(`
`),n("span",{class:"line"},[n("span",null,"# rewrite feature.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"auto-aof-rewrite-percentage 100")]),s(`
`),n("span",{class:"line"},[n("span",null,"auto-aof-rewrite-min-size 64mb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# An AOF file may be found to be truncated at the end during the Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# startup process, when the AOF data gets loaded back into memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This may happen when the system where Redis is running")]),s(`
`),n("span",{class:"line"},[n("span",null,"# crashes, especially when an ext4 filesystem is mounted without the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data=ordered option (however this can't happen when Redis itself")]),s(`
`),n("span",{class:"line"},[n("span",null,"# crashes or aborts but the operating system still works correctly).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis can either exit with an error when this happens, or load as much")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data as possible (the default now) and start if the AOF file is found")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to be truncated at the end. The following option controls this behavior.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If aof-load-truncated is set to yes, a truncated AOF file is loaded and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the Redis server starts emitting a log to inform the user of the event.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Otherwise if the option is set to no, the server aborts with an error")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and refuses to start. When the option is set to no, the user requires")]),s(`
`),n("span",{class:"line"},[n("span",null,'# to fix the AOF file using the "redis-check-aof" utility before to restart')]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that if the AOF file will be found to be corrupted in the middle")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server will still exit with an error. This option only applies when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis will try to read more data from the AOF file but not enough bytes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will be found.")]),s(`
`),n("span",{class:"line"},[n("span",null,"aof-load-truncated yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis can create append-only base files in either RDB or AOF formats. Using")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the RDB format is always faster and more efficient, and disabling it is only")]),s(`
`),n("span",{class:"line"},[n("span",null,"# supported for backward compatibility purposes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"aof-use-rdb-preamble yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis supports recording timestamp annotations in the AOF to support restoring")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the data from a specific point-in-time. However, using this capability changes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the AOF format in a way that may not be compatible with existing AOF parsers.")]),s(`
`),n("span",{class:"line"},[n("span",null,"aof-timestamp-enabled no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ SHUTDOWN #####################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Maximum time to wait for replicas when shutting down, in seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# During shut down, a grace period allows any lagging replicas to catch up with")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the latest replication offset before the master exists. This period can")]),s(`
`),n("span",{class:"line"},[n("span",null,"# prevent data loss, especially for deployments without configured disk backups.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The 'shutdown-timeout' value is the grace period's duration in seconds. It is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# only applicable when the instance has replicas. To disable the feature, set")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the value to 0.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# shutdown-timeout 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When Redis receives a SIGINT or SIGTERM, shutdown is initiated and by default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# an RDB snapshot is written to disk in a blocking operation if save points are configured.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The options used on signaled shutdown can include the following values:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default:  Saves RDB snapshot only if save points are configured.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#           Waits for lagging replicas to catch up.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# save:     Forces a DB saving operation even if no save points are configured.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# nosave:   Prevents DB saving operation even if one or more save points are configured.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# now:      Skips waiting for lagging replicas.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# force:    Ignores any errors that would normally prevent the server from exiting.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Any combination of values is allowed as long as "save" and "nosave" are not set simultaneously.')]),s(`
`),n("span",{class:"line"},[n("span",null,'# Example: "nosave force now"')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# shutdown-on-sigint default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# shutdown-on-sigterm default")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################ NON-DETERMINISTIC LONG BLOCKING COMMANDS #####################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Maximum time in milliseconds for EVAL scripts, functions and in some cases")]),s(`
`),n("span",{class:"line"},[n("span",null,"# modules' commands before Redis can start processing or rejecting other clients.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the maximum execution time is reached Redis will start to reply to most")]),s(`
`),n("span",{class:"line"},[n("span",null,"# commands with a BUSY error.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In this state Redis will only allow a handful of commands to be executed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For instance, SCRIPT KILL, FUNCTION KILL, SHUTDOWN NOSAVE and possibly some")]),s(`
`),n("span",{class:"line"},[n("span",null,"# module specific 'allow-busy' commands.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# SCRIPT KILL and FUNCTION KILL will only be able to stop a script that did not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# yet call any write commands, so SHUTDOWN NOSAVE may be the only way to stop")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server in the case a write command was already issued by the script when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the user doesn't want to wait for the natural termination of the script.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default is 5 seconds. It is possible to set it to 0 or a negative value")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to disable this mechanism (uninterrupted execution). Note that in the past")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this config had a different name, which is now an alias, so both of these do")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the same:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# lua-time-limit 5000")]),s(`
`),n("span",{class:"line"},[n("span",null,"# busy-reply-threshold 5000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ REDIS CLUSTER  ###############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Normal Redis instances can't be part of a Redis Cluster; only nodes that are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# started as cluster nodes can. In order to start a Redis instance as a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster node enable the cluster support uncommenting the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-enabled yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Every cluster node has a cluster configuration file. This file is not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# intended to be edited by hand. It is created and updated by Redis nodes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Every Redis Cluster node requires a different cluster configuration file.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Make sure that instances running in the same system do not have")]),s(`
`),n("span",{class:"line"},[n("span",null,"# overlapping cluster configuration file names.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-config-file nodes-6379.conf")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Cluster node timeout is the amount of milliseconds a node must be unreachable")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for it to be considered in failure state.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Most other internal time limits are a multiple of the node timeout.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-node-timeout 15000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The cluster port is the port that the cluster bus will listen for inbound connections on. When set ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to the default value, 0, it will be bound to the command port + 10000. Setting this value requires ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# you to specify the cluster bus port when executing cluster meet.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-port 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A replica of a failing master will avoid to start a failover if its data")]),s(`
`),n("span",{class:"line"},[n("span",null,"# looks too old.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# There is no simple way for a replica to actually have an exact measure of")]),s(`
`),n("span",{class:"line"},[n("span",null,'# its "data age", so the following two checks are performed:')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1) If there are multiple replicas able to failover, they exchange messages")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    in order to try to give an advantage to the replica with the best")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    replication offset (more data from the master processed).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    Replicas will try to get their rank by offset, and apply to the start")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    of the failover a delay proportional to their rank.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2) Every single replica computes the time of the last interaction with")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    its master. This can be the last ping or command received (if the master")]),s(`
`),n("span",{class:"line"},[n("span",null,'#    is still in the "connected" state), or the time that elapsed since the')]),s(`
`),n("span",{class:"line"},[n("span",null,"#    disconnection with the master (if the replication link is currently down).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    If the last interaction is too old, the replica will not try to failover")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    at all.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# The point "2" can be tuned by user. Specifically a replica will not perform')]),s(`
`),n("span",{class:"line"},[n("span",null,"# the failover if, since the last interaction with the master, the time")]),s(`
`),n("span",{class:"line"},[n("span",null,"# elapsed is greater than:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   (node-timeout * cluster-replica-validity-factor) + repl-ping-replica-period")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# So for example if node-timeout is 30 seconds, and the cluster-replica-validity-factor")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is 10, and assuming a default repl-ping-replica-period of 10 seconds, the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica will not try to failover if it was not able to talk with the master")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for longer than 310 seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A large cluster-replica-validity-factor may allow replicas with too old data to failover")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a master, while a too small value may prevent the cluster from being able to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# elect a replica at all.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For maximum availability, it is possible to set the cluster-replica-validity-factor")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to a value of 0, which means, that replicas will always try to failover the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master regardless of the last time they interacted with the master.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (However they'll always try to apply a delay proportional to their")]),s(`
`),n("span",{class:"line"},[n("span",null,"# offset rank).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Zero is the only value able to guarantee that when all the partitions heal")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the cluster will always be able to continue.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-replica-validity-factor 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Cluster replicas are able to migrate to orphaned masters, that are masters")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that are left without working replicas. This improves the cluster ability")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to resist to failures as otherwise an orphaned master can't be failed over")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in case of failure if it has no working replicas.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Replicas migrate to orphaned masters only if there are still at least a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# given number of other working replicas for their old master. This number")]),s(`
`),n("span",{class:"line"},[n("span",null,'# is the "migration barrier". A migration barrier of 1 means that a replica')]),s(`
`),n("span",{class:"line"},[n("span",null,"# will migrate only if there is at least 1 other working replica for its master")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and so forth. It usually reflects the number of replicas you want for every")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master in your cluster.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Default is 1 (replicas migrate only if their masters remain with at least")]),s(`
`),n("span",{class:"line"},[n("span",null,"# one replica). To disable migration just set it to a very large value or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# set cluster-allow-replica-migration to 'no'.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A value of 0 can be set but is useful only for debugging and dangerous")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in production.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-migration-barrier 1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Turning off this option allows to use less automatic cluster configuration.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It both disables migration to orphaned masters and migration from masters")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that became empty.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Default is 'yes' (allow automatic migrations).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-allow-replica-migration yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default Redis Cluster nodes stop accepting queries if they detect there")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is at least a hash slot uncovered (no available node is serving it).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This way if the cluster is partially down (for example a range of hash slots")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are no longer covered) all the cluster becomes, eventually, unavailable.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It automatically returns available as soon as all the slots are covered again.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# However sometimes you want the subset of the cluster which is working,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to continue to accept queries for the part of the key space that is still")]),s(`
`),n("span",{class:"line"},[n("span",null,"# covered. In order to do so, just set the cluster-require-full-coverage")]),s(`
`),n("span",{class:"line"},[n("span",null,"# option to no.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-require-full-coverage yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option, when set to yes, prevents replicas from trying to failover its")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master during master failures. However the replica can still perform a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# manual failover, if forced to do so.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is useful in different scenarios, especially in the case of multiple")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data center operations, where we want one side to never be promoted if not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in the case of a total DC failure.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-replica-no-failover no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option, when set to yes, allows nodes to serve read traffic while the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster is in a down state, as long as it believes it owns the slots.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is useful for two cases.  The first case is for when an application")]),s(`
`),n("span",{class:"line"},[n("span",null,"# doesn't require consistency of data during node failures or network partitions.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# One example of this is a cache, where as long as the node has the data it")]),s(`
`),n("span",{class:"line"},[n("span",null,"# should be able to serve it.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The second use case is for configurations that don't meet the recommended")]),s(`
`),n("span",{class:"line"},[n("span",null,"# three shards but want to enable cluster mode and scale later. A")]),s(`
`),n("span",{class:"line"},[n("span",null,"# master outage in a 1 or 2 shard configuration causes a read/write outage to the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# entire cluster without this option set, with it set there is only a write outage.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Without a quorum of masters, slot ownership will not change automatically.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-allow-reads-when-down no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This option, when set to yes, allows nodes to serve pubsub shard traffic while")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the cluster is in a down state, as long as it believes it owns the slots.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is useful if the application would like to use the pubsub feature even when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the cluster global stable state is not OK. If the application wants to make sure only")]),s(`
`),n("span",{class:"line"},[n("span",null,"# one shard is serving a given channel, this feature should be kept as yes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-allow-pubsubshard-when-down yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Cluster link send buffer limit is the limit on the memory usage of an individual")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster bus link's send buffer in bytes. Cluster links would be freed if they exceed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this limit. This is to primarily prevent send buffers from growing unbounded on links")]),s(`
`),n("span",{class:"line"},[n("span",null,"# toward slow peers (E.g. PubSub messages being piled up).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This limit is disabled by default. Enable this limit when 'mem_cluster_links' INFO field")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and/or 'send-buffer-allocated' entries in the 'CLUSTER LINKS` command output continuously increase.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Minimum limit of 1gb is recommended so that cluster link buffer can fit in at least a single")]),s(`
`),n("span",{class:"line"},[n("span",null,"# PubSub message by default. (client-query-buffer-limit default value is 1gb)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-link-sendbuf-limit 0")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Clusters can configure their announced hostname using this config. This is a common use case for ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# applications that need to use TLS Server Name Indication (SNI) or dealing with DNS based")]),s(`
`),n("span",{class:"line"},[n("span",null,"# routing. By default this value is only shown as additional metadata in the CLUSTER SLOTS")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command, but can be changed using 'cluster-preferred-endpoint-type' config. This value is ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# communicated along the clusterbus to all nodes, setting it to an empty string will remove ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the hostname and also propagate the removal.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# cluster-announce-hostname ""')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Clusters can configure an optional nodename to be used in addition to the node ID for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# debugging and admin information. This name is broadcasted between nodes, so will be used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in addition to the node ID when reporting cross node events such as node failures.")]),s(`
`),n("span",{class:"line"},[n("span",null,'# cluster-announce-human-nodename ""')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Clusters can advertise how clients should connect to them using either their IP address,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a user defined hostname, or by declaring they have no endpoint. Which endpoint is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# shown as the preferred endpoint is set by using the cluster-preferred-endpoint-type")]),s(`
`),n("span",{class:"line"},[n("span",null,"# config with values 'ip', 'hostname', or 'unknown-endpoint'. This value controls how")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the endpoint returned for MOVED/ASKING requests as well as the first field of CLUSTER SLOTS. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the preferred endpoint type is set to hostname, but no announced hostname is set, a '?' ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will be returned instead.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When a cluster advertises itself as having an unknown endpoint, it's indicating that")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the server doesn't know how clients can reach the cluster. This can happen in certain ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# networking situations where there are multiple possible routes to the node, and the ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# server doesn't know which one the client took. In this case, the server is expecting")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the client to reach out on the same endpoint it used for making the last request, but use")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the port provided in the response.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-preferred-endpoint-type ip")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In order to setup your cluster make sure to read the documentation")]),s(`
`),n("span",{class:"line"},[n("span",null,"# available at https://redis.io web site.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"########################## CLUSTER DOCKER/NAT support  ########################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In certain deployments, Redis Cluster nodes address discovery fails, because")]),s(`
`),n("span",{class:"line"},[n("span",null,"# addresses are NAT-ted or because ports are forwarded (the typical case is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Docker and other containers).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In order to make Redis Cluster working in such environments, a static")]),s(`
`),n("span",{class:"line"},[n("span",null,"# configuration where each node knows its public address is needed. The")]),s(`
`),n("span",{class:"line"},[n("span",null,"# following four options are used for this scope, and are:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * cluster-announce-ip")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * cluster-announce-port")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * cluster-announce-tls-port")]),s(`
`),n("span",{class:"line"},[n("span",null,"# * cluster-announce-bus-port")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Each instructs the node about its address, client ports (for connections")]),s(`
`),n("span",{class:"line"},[n("span",null,"# without and with TLS) and cluster message bus port. The information is then")]),s(`
`),n("span",{class:"line"},[n("span",null,"# published in the header of the bus packets so that other nodes will be able to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# correctly map the address of the node publishing the information.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If tls-cluster is set to yes and cluster-announce-tls-port is omitted or set")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to zero, then cluster-announce-port refers to the TLS port. Note also that")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-announce-tls-port has no effect if tls-cluster is set to no.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If the above options are not used, the normal Redis Cluster auto-detection")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will be used instead.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that when remapped, the bus port may not be at the fixed offset of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# clients port + 10000, so you can specify any port and bus-port depending")]),s(`
`),n("span",{class:"line"},[n("span",null,"# on how they get remapped. If the bus-port is not set, a fixed offset of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 10000 will be used as usual.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-announce-ip 10.1.1.5")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-announce-tls-port 6379")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-announce-port 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"# cluster-announce-bus-port 6380")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################## SLOW LOG ###################################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The Redis Slow Log is a system to log queries that exceeded a specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"# execution time. The execution time does not include the I/O operations")]),s(`
`),n("span",{class:"line"},[n("span",null,"# like talking with the client, sending the reply and so forth,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# but just the time needed to actually execute the command (this is the only")]),s(`
`),n("span",{class:"line"},[n("span",null,"# stage of command execution where the thread is blocked and can not serve")]),s(`
`),n("span",{class:"line"},[n("span",null,"# other requests in the meantime).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can configure the slow log with two parameters: one tells Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# what is the execution time, in microseconds, to exceed in order for the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# command to get logged, and the other parameter is the length of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# slow log. When a new command is logged the oldest one is removed from the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# queue of logged commands.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The following time is expressed in microseconds, so 1000000 is equivalent")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to one second. Note that a negative number disables the slow log, while")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a value of zero forces the logging of every command.")]),s(`
`),n("span",{class:"line"},[n("span",null,"slowlog-log-slower-than 10000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# There is no limit to this length. Just be aware that it will consume memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can reclaim memory used by the slow log with SLOWLOG RESET.")]),s(`
`),n("span",{class:"line"},[n("span",null,"slowlog-max-len 128")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ LATENCY MONITOR ##############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The Redis latency monitoring subsystem samples different operations")]),s(`
`),n("span",{class:"line"},[n("span",null,"# at runtime in order to collect data related to possible sources of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# latency of a Redis instance.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Via the LATENCY command this information is available to the user that can")]),s(`
`),n("span",{class:"line"},[n("span",null,"# print graphs and obtain reports.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The system only logs operations that were performed in a time equal or")]),s(`
`),n("span",{class:"line"},[n("span",null,"# greater than the amount of milliseconds specified via the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# latency-monitor-threshold configuration directive. When its value is set")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to zero, the latency monitor is turned off.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default latency monitoring is disabled since it is mostly not needed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# if you don't have latency issues, and collecting data has a performance")]),s(`
`),n("span",{class:"line"},[n("span",null,"# impact, that while very small, can be measured under big load. Latency")]),s(`
`),n("span",{class:"line"},[n("span",null,"# monitoring can easily be enabled at runtime using the command")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "CONFIG SET latency-monitor-threshold <milliseconds>" if needed.')]),s(`
`),n("span",{class:"line"},[n("span",null,"latency-monitor-threshold 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"################################ LATENCY TRACKING ##############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The Redis extended latency monitoring tracks the per command latencies and enables")]),s(`
`),n("span",{class:"line"},[n("span",null,"# exporting the percentile distribution via the INFO latencystats command,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and cumulative latency distributions (histograms) via the LATENCY command.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, the extended latency monitoring is enabled since the overhead")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of keeping track of the command latency is very small.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# latency-tracking yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default the exported latency percentiles via the INFO latencystats command")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are the p50, p99, and p999.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# latency-tracking-info-percentiles 50 99 99.9")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################# EVENT NOTIFICATION ##############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis can notify Pub/Sub clients about events happening in the key space.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This feature is documented at https://redis.io/topics/notifications")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For instance if keyspace events notification is enabled, and a client")]),s(`
`),n("span",{class:"line"},[n("span",null,'# performs a DEL operation on key "foo" stored in the Database 0, two')]),s(`
`),n("span",{class:"line"},[n("span",null,"# messages will be published via Pub/Sub:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# PUBLISH __keyspace@0__:foo del")]),s(`
`),n("span",{class:"line"},[n("span",null,"# PUBLISH __keyevent@0__:del foo")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is possible to select the events that Redis will notify among a set")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of classes. Every class is identified by a single character:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  K     Keyspace events, published with __keyspace@<db>__ prefix.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  E     Keyevent events, published with __keyevent@<db>__ prefix.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  $     String commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  l     List commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  s     Set commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  h     Hash commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  z     Sorted set commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  x     Expired events (events generated every time a key expires)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  e     Evicted events (events generated when a key is evicted for maxmemory)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  n     New key events (Note: not included in the 'A' class)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  t     Stream commands")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  d     Module key type events")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  m     Key-miss events (Note: It is not included in the 'A' class)")]),s(`
`),n("span",{class:"line"},[n("span",null,'#  A     Alias for g$lshzxetd, so that the "AKE" string means all the events')]),s(`
`),n("span",{class:"line"},[n("span",null,"#        (Except key-miss events which are excluded from 'A' due to their")]),s(`
`),n("span",{class:"line"},[n("span",null,"#         unique nature).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'#  The "notify-keyspace-events" takes as argument a string that is composed')]),s(`
`),n("span",{class:"line"},[n("span",null,"#  of zero or multiple characters. The empty string means that notifications")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  are disabled.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  Example: to enable list and generic events, from the point of view of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"#           event name, use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  notify-keyspace-events Elg")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  Example 2: to get the stream of the expired keys subscribing to channel")]),s(`
`),n("span",{class:"line"},[n("span",null,"#             name __keyevent@0__:expired use:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  notify-keyspace-events Ex")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  By default all notifications are disabled because most users don't need")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  this feature and the feature has some overhead. Note that if you don't")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  specify at least one of K or E, no events will be delivered.")]),s(`
`),n("span",{class:"line"},[n("span",null,'notify-keyspace-events ""')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"############################### ADVANCED CONFIG ###############################")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Hashes are encoded using a memory efficient data structure when they have a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# small number of entries, and the biggest entry does not exceed a given")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threshold. These thresholds can be configured using the following directives.")]),s(`
`),n("span",{class:"line"},[n("span",null,"hash-max-listpack-entries 512")]),s(`
`),n("span",{class:"line"},[n("span",null,"hash-max-listpack-value 64")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Lists are also encoded in a special way to save a lot of space.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The number of entries allowed per internal list node can be specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"# as a fixed maximum size or a maximum number of elements.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# For a fixed maximum size, use -5 through -1, meaning:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -5: max size: 64 Kb  <-- not recommended for normal workloads")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -4: max size: 32 Kb  <-- not recommended")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -3: max size: 16 Kb  <-- probably not recommended")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -2: max size: 8 Kb   <-- good")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -1: max size: 4 Kb   <-- good")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Positive numbers mean store up to _exactly_ that number of elements")]),s(`
`),n("span",{class:"line"},[n("span",null,"# per list node.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The highest performing option is usually -2 (8 Kb size) or -1 (4 Kb size),")]),s(`
`),n("span",{class:"line"},[n("span",null,"# but if your use case is unique, adjust the settings as necessary.")]),s(`
`),n("span",{class:"line"},[n("span",null,"list-max-listpack-size -2")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Lists may also be compressed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Compress depth is the number of quicklist ziplist nodes from *each* side of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the list to *exclude* from compression.  The head and tail of the list")]),s(`
`),n("span",{class:"line"},[n("span",null,"# are always uncompressed for fast push/pop operations.  Settings are:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 0: disable all list compression")]),s(`
`),n("span",{class:"line"},[n("span",null,`# 1: depth 1 means "don't start compressing until after 1 node into the list,`)]),s(`
`),n("span",{class:"line"},[n("span",null,'#    going from either the head or tail"')]),s(`
`),n("span",{class:"line"},[n("span",null,"#    So: [head]->node->node->...->node->[tail]")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    [head], [tail] will always be uncompressed; inner nodes will compress.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2: [head]->[next]->node->node->...->node->[prev]->[tail]")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    2 here means: don't compress head or head->next or tail->prev or tail,")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    but compress all nodes between them.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3: [head]->[next]->[next]->node->node->...->node->[prev]->[prev]->[tail]")]),s(`
`),n("span",{class:"line"},[n("span",null,"# etc.")]),s(`
`),n("span",{class:"line"},[n("span",null,"list-compress-depth 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Sets have a special encoding when a set is composed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of just strings that happen to be integers in radix 10 in the range")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of 64 bit signed integers.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The following configuration setting sets the limit in the size of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# set in order to use this special memory saving encoding.")]),s(`
`),n("span",{class:"line"},[n("span",null,"set-max-intset-entries 512")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Sets containing non-integer values are also encoded using a memory efficient")]),s(`
`),n("span",{class:"line"},[n("span",null,"# data structure when they have a small number of entries, and the biggest entry")]),s(`
`),n("span",{class:"line"},[n("span",null,"# does not exceed a given threshold. These thresholds can be configured using")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the following directives.")]),s(`
`),n("span",{class:"line"},[n("span",null,"set-max-listpack-entries 128")]),s(`
`),n("span",{class:"line"},[n("span",null,"set-max-listpack-value 64")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Similarly to hashes and lists, sorted sets are also specially encoded in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# order to save a lot of space. This encoding is only used when the length and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# elements of a sorted set are below the following limits:")]),s(`
`),n("span",{class:"line"},[n("span",null,"zset-max-listpack-entries 128")]),s(`
`),n("span",{class:"line"},[n("span",null,"zset-max-listpack-value 64")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# HyperLogLog sparse representation bytes limit. The limit includes the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 16 bytes header. When a HyperLogLog using the sparse representation crosses")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this limit, it is converted into the dense representation.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A value greater than 16000 is totally useless, since at that point the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# dense representation is more memory efficient.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The suggested value is ~ 3000 in order to have the benefits of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the space efficient encoding without slowing down too much PFADD,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# which is O(N) with the sparse encoding. The value can be raised to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ~ 10000 when CPU is not a concern, but space is, and the data set is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# composed of many HyperLogLogs with cardinality in the 0 - 15000 range.")]),s(`
`),n("span",{class:"line"},[n("span",null,"hll-sparse-max-bytes 3000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Streams macro node max size / items. The stream data structure is a radix")]),s(`
`),n("span",{class:"line"},[n("span",null,"# tree of big nodes that encode multiple items inside. Using this configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# it is possible to configure how big a single node can be in bytes, and the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maximum number of items it may contain before switching to a new node when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# appending new stream entries. If any of the following settings are set to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# zero, the limit is ignored, so for instance it is possible to set just a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# max entries limit by setting max-bytes to 0 and max-entries to the desired")]),s(`
`),n("span",{class:"line"},[n("span",null,"# value.")]),s(`
`),n("span",{class:"line"},[n("span",null,"stream-node-max-bytes 4096")]),s(`
`),n("span",{class:"line"},[n("span",null,"stream-node-max-entries 100")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# order to help rehashing the main Redis hash table (the one mapping top-level")]),s(`
`),n("span",{class:"line"},[n("span",null,"# keys to values). The hash table implementation Redis uses (see dict.c)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# performs a lazy rehashing: the more operation you run into a hash table")]),s(`
`),n("span",{class:"line"},[n("span",null,'# that is rehashing, the more rehashing "steps" are performed, so if the')]),s(`
`),n("span",{class:"line"},[n("span",null,"# server is idle the rehashing is never complete and some more memory is used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# by the hash table.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default is to use this millisecond 10 times every second in order to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# actively rehash the main dictionaries, freeing memory when possible.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If unsure:")]),s(`
`),n("span",{class:"line"},[n("span",null,'# use "activerehashing no" if you have hard latency requirements and it is')]),s(`
`),n("span",{class:"line"},[n("span",null,"# not a good thing in your environment that Redis can reply from time to time")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to queries with 2 milliseconds delay.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,`# use "activerehashing yes" if you don't have such hard requirements but`)]),s(`
`),n("span",{class:"line"},[n("span",null,"# want to free memory asap when possible.")]),s(`
`),n("span",{class:"line"},[n("span",null,"activerehashing yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The client output buffer limits can be used to force disconnection of clients")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that are not reading data from the server fast enough for some reason (a")]),s(`
`),n("span",{class:"line"},[n("span",null,"# common reason is that a Pub/Sub client can't consume messages as fast as the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# publisher can produce them).")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The limit can be set differently for the three different classes of clients:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# normal -> normal clients including MONITOR clients")]),s(`
`),n("span",{class:"line"},[n("span",null,"# replica -> replica clients")]),s(`
`),n("span",{class:"line"},[n("span",null,"# pubsub -> clients subscribed to at least one pubsub channel or pattern")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The syntax of every client-output-buffer-limit directive is the following:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# client-output-buffer-limit <class> <hard limit> <soft limit> <soft seconds>")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A client is immediately disconnected once the hard limit is reached, or if")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the soft limit is reached and remains reached for the specified number of")]),s(`
`),n("span",{class:"line"},[n("span",null,"# seconds (continuously).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# So for instance if the hard limit is 32 megabytes and the soft limit is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 16 megabytes / 10 seconds, the client will get disconnected immediately")]),s(`
`),n("span",{class:"line"},[n("span",null,"# if the size of the output buffers reach 32 megabytes, but will also get")]),s(`
`),n("span",{class:"line"},[n("span",null,"# disconnected if the client reaches 16 megabytes and continuously overcomes")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the limit for 10 seconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default normal clients are not limited because they don't receive data")]),s(`
`),n("span",{class:"line"},[n("span",null,"# without asking (in a push way), but just after a request, so only")]),s(`
`),n("span",{class:"line"},[n("span",null,"# asynchronous clients may create a scenario where data is requested faster")]),s(`
`),n("span",{class:"line"},[n("span",null,"# than it can read.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Instead there is a default limit for pubsub and replica clients, since")]),s(`
`),n("span",{class:"line"},[n("span",null,"# subscribers and replicas receive data in a push fashion.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Note that it doesn't make sense to set the replica clients output buffer")]),s(`
`),n("span",{class:"line"},[n("span",null,"# limit lower than the repl-backlog-size config (partial sync will succeed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and then replica will get disconnected).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Such a configuration is ignored (the size of repl-backlog-size will be used).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This doesn't have memory consumption implications since the replica client")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will share the backlog buffers memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Both the hard or the soft limit can be disabled by setting them to zero.")]),s(`
`),n("span",{class:"line"},[n("span",null,"client-output-buffer-limit normal 0 0 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"client-output-buffer-limit replica 256mb 64mb 60")]),s(`
`),n("span",{class:"line"},[n("span",null,"client-output-buffer-limit pubsub 32mb 8mb 60")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Client query buffers accumulate new commands. They are limited to a fixed")]),s(`
`),n("span",{class:"line"},[n("span",null,"# amount by default in order to avoid that a protocol desynchronization (for")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instance due to a bug in the client) will lead to unbound memory usage in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the query buffer. However you can configure it here if you have very special")]),s(`
`),n("span",{class:"line"},[n("span",null,"# needs, such as a command with huge argument, or huge multi/exec requests or alike.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# client-query-buffer-limit 1gb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In some scenarios client connections can hog up memory leading to OOM")]),s(`
`),n("span",{class:"line"},[n("span",null,"# errors or data eviction. To avoid this we can cap the accumulated memory")]),s(`
`),n("span",{class:"line"},[n("span",null,"# used by all client connections (all pubsub and normal clients). Once we")]),s(`
`),n("span",{class:"line"},[n("span",null,"# reach that limit connections will be dropped by the server freeing up")]),s(`
`),n("span",{class:"line"},[n("span",null,"# memory. The server will attempt to drop the connections using the most ")]),s(`
`),n("span",{class:"line"},[n("span",null,'# memory first. We call this mechanism "client eviction".')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Client eviction is configured using the maxmemory-clients setting as follows:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 0 - client eviction is disabled (default)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A memory value can be used for the client eviction threshold,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for example:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory-clients 1g")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# A percentage value (between 1% and 100%) means the client eviction threshold")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is based on a percentage of the maxmemory setting. For example to set client")]),s(`
`),n("span",{class:"line"},[n("span",null,"# eviction at 5% of maxmemory:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# maxmemory-clients 5%")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In the Redis protocol, bulk requests, that are, elements representing single")]),s(`
`),n("span",{class:"line"},[n("span",null,"# strings, are normally limited to 512 mb. However you can change this limit")]),s(`
`),n("span",{class:"line"},[n("span",null,"# here, but must be 1mb or greater")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# proto-max-bulk-len 512mb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis calls an internal function to perform many background tasks, like")]),s(`
`),n("span",{class:"line"},[n("span",null,"# closing connections of clients in timeout, purging expired keys that are")]),s(`
`),n("span",{class:"line"},[n("span",null,"# never requested, and so forth.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Not all tasks are performed with the same frequency, but Redis checks for")]),s(`
`),n("span",{class:"line"},[n("span",null,'# tasks to perform according to the specified "hz" value.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# By default "hz" is set to 10. Raising the value will use more CPU when')]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis is idle, but at the same time will make Redis more responsive when")]),s(`
`),n("span",{class:"line"},[n("span",null,"# there are many keys expiring at the same time, and timeouts may be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# handled with more precision.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The range is between 1 and 500, however a value over 100 is usually not")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a good idea. Most users should use the default of 10 and raise this up to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 100 only in environments where very low latency is required.")]),s(`
`),n("span",{class:"line"},[n("span",null,"hz 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Normally it is useful to have an HZ value which is proportional to the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# number of clients connected. This is useful in order, for instance, to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# avoid too many clients are processed for each background task invocation")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to avoid latency spikes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Since the default HZ value by default is conservatively set to 10, Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# offers, and enables by default, the ability to use an adaptive HZ value")]),s(`
`),n("span",{class:"line"},[n("span",null,"# which will temporarily raise when there are many connected clients.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When dynamic HZ is enabled, the actual configured HZ will be used")]),s(`
`),n("span",{class:"line"},[n("span",null,"# as a baseline, but multiples of the configured HZ value will be actually")]),s(`
`),n("span",{class:"line"},[n("span",null,"# used as needed once more clients are connected. In this way an idle")]),s(`
`),n("span",{class:"line"},[n("span",null,"# instance will use very little CPU time while a busy instance will be")]),s(`
`),n("span",{class:"line"},[n("span",null,"# more responsive.")]),s(`
`),n("span",{class:"line"},[n("span",null,"dynamic-hz yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When a child rewrites the AOF file, if the following option is enabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the file will be fsync-ed every 4 MB of data generated. This is useful")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to commit the file to the disk more incrementally and avoid")]),s(`
`),n("span",{class:"line"},[n("span",null,"# big latency spikes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"aof-rewrite-incremental-fsync yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# When redis saves RDB file, if the following option is enabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the file will be fsync-ed every 4 MB of data generated. This is useful")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in order to commit the file to the disk more incrementally and avoid")]),s(`
`),n("span",{class:"line"},[n("span",null,"# big latency spikes.")]),s(`
`),n("span",{class:"line"},[n("span",null,"rdb-save-incremental-fsync yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Redis LFU eviction (see maxmemory setting) can be tuned. However it is a good")]),s(`
`),n("span",{class:"line"},[n("span",null,"# idea to start with the default settings and only change them after investigating")]),s(`
`),n("span",{class:"line"},[n("span",null,"# how to improve the performances and how the keys LFU change over time, which")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is possible to inspect via the OBJECT FREQ command.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# There are two tunable parameters in the Redis LFU implementation: the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# counter logarithm factor and the counter decay time. It is important to")]),s(`
`),n("span",{class:"line"},[n("span",null,"# understand what the two parameters mean before changing them.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The LFU counter is just 8 bits per key, it's maximum value is 255, so Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"# uses a probabilistic increment with logarithmic behavior. Given the value")]),s(`
`),n("span",{class:"line"},[n("span",null,"# of the old counter, when a key is accessed, the counter is incremented in")]),s(`
`),n("span",{class:"line"},[n("span",null,"# this way:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1. A random number R between 0 and 1 is extracted.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2. A probability P is calculated as 1/(old_value*lfu_log_factor+1).")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3. The counter is incremented only if R < P.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default lfu-log-factor is 10. This is a table of how the frequency")]),s(`
`),n("span",{class:"line"},[n("span",null,"# counter changes with a different number of accesses with different")]),s(`
`),n("span",{class:"line"},[n("span",null,"# logarithmic factors:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"# | factor | 100 hits   | 1000 hits  | 100K hits  | 1M hits    | 10M hits   |")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"# | 0      | 104        | 255        | 255        | 255        | 255        |")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"# | 1      | 18         | 49         | 255        | 255        | 255        |")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"# | 10     | 10         | 18         | 142        | 255        | 255        |")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"# | 100    | 8          | 11         | 49         | 143        | 255        |")]),s(`
`),n("span",{class:"line"},[n("span",null,"# +--------+------------+------------+------------+------------+------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# NOTE: The above table was obtained by running the following commands:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   redis-benchmark -n 1000000 incr foo")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   redis-cli object freq foo")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# NOTE 2: The counter initial value is 5 in order to give new objects a chance")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to accumulate hits.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The counter decay time is the time, in minutes, that must elapse in order")]),s(`
`),n("span",{class:"line"},[n("span",null,"# for the key counter to be decremented.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default value for the lfu-decay-time is 1. A special value of 0 means we")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will never decay the counter.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# lfu-log-factor 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"# lfu-decay-time 1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The maximum number of new client connections accepted per event-loop cycle. This configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"# is set independently for TLS connections.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# By default, up to 10 new connection will be accepted per event-loop cycle for normal connections")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and up to 1 new connection per event-loop cycle for TLS connections.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Adjusting this to a larger number can slightly improve efficiency for new connections")]),s(`
`),n("span",{class:"line"},[n("span",null,"# at the risk of causing timeouts for regular commands on established connections.  It is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# not advised to change this without ensuring that all clients have limited connection")]),s(`
`),n("span",{class:"line"},[n("span",null,"# pools and exponential backoff in the case of command/connection timeouts. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If your application is establishing a large number of new connections per second you should")]),s(`
`),n("span",{class:"line"},[n("span",null,"# also consider tuning the value of tcp-backlog, which allows the kernel to buffer more")]),s(`
`),n("span",{class:"line"},[n("span",null,"# pending connections before dropping or rejecting connections. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# max-new-connections-per-cycle 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"# max-new-tls-connections-per-cycle 1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"########################### ACTIVE DEFRAGMENTATION #######################")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# What is active defragmentation?")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Active (online) defragmentation allows a Redis server to compact the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# spaces left between small allocations and deallocations of data in memory,")]),s(`
`),n("span",{class:"line"},[n("span",null,"# thus allowing to reclaim back memory.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Fragmentation is a natural process that happens with every allocator (but")]),s(`
`),n("span",{class:"line"},[n("span",null,"# less so with Jemalloc, fortunately) and certain workloads. Normally a server")]),s(`
`),n("span",{class:"line"},[n("span",null,"# restart is needed in order to lower the fragmentation, or at least to flush")]),s(`
`),n("span",{class:"line"},[n("span",null,"# away all the data and create it again. However thanks to this feature")]),s(`
`),n("span",{class:"line"},[n("span",null,"# implemented by Oran Agra for Redis 4.0 this process can happen at runtime")]),s(`
`),n("span",{class:"line"},[n("span",null,'# in a "hot" way, while the server is running.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Basically when the fragmentation is over a certain level (see the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# configuration options below) Redis will start to create new copies of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# values in contiguous memory regions by exploiting certain specific Jemalloc")]),s(`
`),n("span",{class:"line"},[n("span",null,"# features (in order to understand if an allocation is causing fragmentation")]),s(`
`),n("span",{class:"line"},[n("span",null,"# and to allocate it in a better place), and at the same time, will release the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# old copies of the data. This process, repeated incrementally for all the keys")]),s(`
`),n("span",{class:"line"},[n("span",null,"# will cause the fragmentation to drop back to normal values.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Important things to understand:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 1. This feature is disabled by default, and only works if you compiled Redis")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    to use the copy of Jemalloc we ship with the source code of Redis.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    This is the default with Linux builds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 2. You never need to enable this feature if you don't have fragmentation")]),s(`
`),n("span",{class:"line"},[n("span",null,"#    issues.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 3. Once you experience fragmentation, you can enable this feature when")]),s(`
`),n("span",{class:"line"},[n("span",null,'#    needed with the command "CONFIG SET activedefrag yes".')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The configuration parameters are able to fine tune the behavior of the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# defragmentation process. If you are not sure about what they mean it is")]),s(`
`),n("span",{class:"line"},[n("span",null,"# a good idea to leave the defaults untouched.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Active defragmentation is disabled by default")]),s(`
`),n("span",{class:"line"},[n("span",null,"# activedefrag no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Minimum amount of fragmentation waste to start active defrag")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-ignore-bytes 100mb")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Minimum percentage of fragmentation to start active defrag")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-threshold-lower 10")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Maximum percentage of fragmentation at which we use maximum effort")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-threshold-upper 100")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Minimal effort for defrag in CPU percentage, to be used when the lower")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threshold is reached")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-cycle-min 1")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Maximal effort for defrag in CPU percentage, to be used when the upper")]),s(`
`),n("span",{class:"line"},[n("span",null,"# threshold is reached")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-cycle-max 25")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Maximum number of set/hash/zset/list fields that will be processed from")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the main dictionary scan")]),s(`
`),n("span",{class:"line"},[n("span",null,"# active-defrag-max-scan-fields 1000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Jemalloc background thread for purging will be enabled by default")]),s(`
`),n("span",{class:"line"},[n("span",null,"jemalloc-bg-thread yes")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# It is possible to pin different threads and processes of Redis to specific")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CPUs in your system, in order to maximize the performances of the server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is useful both in order to pin different Redis threads in different")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CPUs, but also in order to make sure that multiple Redis instances running")]),s(`
`),n("span",{class:"line"},[n("span",null,"# in the same host will be pinned to different CPUs.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# Normally you can do this using the "taskset" command, however it is also')]),s(`
`),n("span",{class:"line"},[n("span",null,"# possible to this via Redis configuration directly, both in Linux and FreeBSD.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# You can pin the server/IO threads, bio threads, aof rewrite child process, and")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the bgsave child process. The syntax to specify the cpu list is the same as")]),s(`
`),n("span",{class:"line"},[n("span",null,"# the taskset command:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set redis server/io threads to cpu affinity 0,2,4,6:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# server-cpulist 0-7:2")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set bio threads to cpu affinity 1,3:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bio-cpulist 1,3")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set aof rewrite child process to cpu affinity 8,9,10,11:")]),s(`
`),n("span",{class:"line"},[n("span",null,"# aof-rewrite-cpulist 8-11")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set bgsave child process to cpu affinity 1,10,11")]),s(`
`),n("span",{class:"line"},[n("span",null,"# bgsave-cpulist 1,10-11")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# In some cases redis will emit warnings and even refuse to start if it detects")]),s(`
`),n("span",{class:"line"},[n("span",null,"# that the system is in bad state, it is possible to suppress these warnings")]),s(`
`),n("span",{class:"line"},[n("span",null,"# by setting the following config which takes a space delimited list of warnings")]),s(`
`),n("span",{class:"line"},[n("span",null,"# to suppress")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ignore-warnings ARM64-COW-BUG")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"配置文件是从redis容器内拷贝出来的，已修改过的配置如下"),n("ul",null,[n("li",null,"requirepass admin@123456 # 登陆的密码，可自行修改"),n("li",null,"appendonly yes # 开启 AOF 持久化")])]),n("ol",{start:"3"},[n("li",null,"创建Dockerfile文件")]),n("div",{class:"language-dockerfile line-numbers-mode","data-ext":"dockerfile","data-title":"dockerfile"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"FROM"),n("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," redis:7.4.1-alpine")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])])],-1)])),_:1}),l[15]||(l[15]=n("h2",{id:"创建docker-compose配置文件-compose-yaml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建docker-compose配置文件-compose-yaml"},[n("span",null,"创建docker compose配置文件 compose.yaml")])],-1)),e(t,null,{default:a(()=>l[9]||(l[9]=[n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("ul",null,[n("li",null,[s("数据卷都挂载在 "),n("strong",null,"${HOME}/data/redis"),s(" 目录下，请提前创建好对应目录，也可自行修改挂载目录")]),n("li",null,[n("strong",null,"redis.conf"),s(" 配置文件需要拷贝到 "),n("strong",null,"${HOME}/data/redis/conf"),s(" 目录下")])]),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ${"),n("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"HOME"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/data/redis/conf")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ${"),n("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"HOME"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/data/redis/data")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),n("div",{class:"language-yaml line-numbers-mode","data-ext":"yaml","data-title":"yaml"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"services"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  redis"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    build"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      context"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      dockerfile"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," Dockerfile")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    image"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis:7.4.1-alpine")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    container_name"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    restart"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," always")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    user"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${UID}:${GID}")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    networks"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker_net0")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    ports"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 6379:6379")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    environment"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      TZ"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," Asia/Shanghai")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    command"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ["),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"redis-server"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/etc/redis/redis.conf"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    volumes"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"      # 配置目录挂载")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${HOME}/data/redis/conf/redis.conf:/etc/redis/redis.conf")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"      # 数据目录挂载")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${HOME}/data/redis/data:/data")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"networks"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  # 自定义一个桥接网络")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  docker_net0"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[16]||(l[16]=n("h2",{id:"构建并启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建并启动"},[n("span",null,"构建并启动")])],-1)),e(t,null,{default:a(()=>l[10]||(l[10]=[n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 将当前用户的uid和gid写入到.env环境配置")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"echo"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -e"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"UID="),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"id"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -u"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"\\nGID="),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"id"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -g"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," >"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," .env")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"docker"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," compose"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," up"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --build"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -d"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," redis")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[17]||(l[17]=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考"},[n("span",null,"参考")])],-1)),e(t,null,{default:a(()=>l[11]||(l[11]=[n("ul",null,[n("li",null,[n("a",{href:"https://docs.docker.com/manuals",target:"_blank",rel:"noopener noreferrer"},"Docker官方手册")]),n("li",null,[n("a",{href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"},"Docker官方参考文档")])],-1)])),_:1})])}const x=u(m,[["render",T],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/article/da709tgk/","title":"Docker安装redis","lang":"zh-CN","frontmatter":{"title":"Docker安装redis","tags":["docker","redis"],"createTime":"2024/12/26 16:15:52","permalink":"/article/da709tgk/","description":"注意 以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。 注意 使用non-root用户启动容器，默认当前用户，如有需要请自行更改 docker工作目录树 新建docker工作目录 创建Dockerfile用来自定义构建容器 创建docker compose配置文件 compose.yaml 构建并启动 参考","head":[["meta",{"property":"og:url","content":"https://blog.shaocz.me/article/da709tgk/"}],["meta",{"property":"og:site_name","content":"未眠的蓝鸟"}],["meta",{"property":"og:title","content":"Docker安装redis"}],["meta",{"property":"og:description","content":"注意 以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。 注意 使用non-root用户启动容器，默认当前用户，如有需要请自行更改 docker工作目录树 新建docker工作目录 创建Dockerfile用来自定义构建容器 创建docker compose配置文件 compose.yaml 构建并启动 参考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T01:49:18.000Z"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:modified_time","content":"2025-01-09T01:49:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker安装redis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T01:49:18.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":57.84,"words":17353},"git":{"updatedTime":1736387358000,"contributors":[{"name":"huaihuashu","username":"huaihuashu","email":"october4th@88.com","commits":3,"avatar":"https://avatars.githubusercontent.com/huaihuashu?v=4","url":"https://github.com/huaihuashu"},{"name":"huaihuashu","username":"huaihuashu","email":"778559256@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/huaihuashu?v=4","url":"https://github.com/huaihuashu"}]},"autoDesc":true,"filePathRelative":"docker/Docker安装redis.md","categoryList":[{"id":"05b605","sort":10000,"name":"docker"}],"bulletin":false}');export{x as comp,I as data};
