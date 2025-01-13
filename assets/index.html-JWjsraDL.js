import{_ as p,c as u,a as d,b as e,w as a,d as n,r,o,e as s}from"./app-DRIKgw45.js";const m={},b={class:"vp-file-tree"},v={class:"tree-node folder"},h={class:"tree-node folder"},_={class:"tree-node folder"},g={class:"tree-node file"},f={class:"tree-node folder"},k={class:"tree-node file"},y={class:"tree-node file"},A={class:"tree-node file"},w={class:"tree-node file"},x={class:"tree-node file"};function B(D,l){const i=r("VPIcon"),t=r("FileTreeItem"),c=r("VPCard");return o(),u("div",null,[l[15]||(l[15]=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用non-root用户启动容器，默认当前用户，如有需要请自行更改</p></div><h2 id="docker工作目录树" tabindex="-1"><a class="header-anchor" href="#docker工作目录树"><span>docker工作目录树</span></a></h2>',3)),e(c,null,{default:a(()=>[n("div",b,[n("ul",null,[e(t,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",v,[e(i,{name:"vscode-icons:default-folder"}),l[0]||(l[0]=n("span",{class:"name"},"docker",-1))]),n("ul",null,[e(t,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",h,[e(i,{name:"vscode-icons:default-folder"}),l[1]||(l[1]=n("span",{class:"name"},"postgres",-1))]),n("ul",null,[e(t,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",_,[e(i,{name:"vscode-icons:folder-type-config"}),l[2]||(l[2]=n("span",{class:"name"},"conf",-1))]),n("ul",null,[e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",g,[e(i,{name:"vscode-icons:file-type-config"}),l[3]||(l[3]=n("span",{class:"name"},"postgresql.conf",-1))])]),_:1})])]),_:1}),e(t,{type:"folder",expanded:!0,empty:!1},{default:a(()=>[n("span",f,[e(i,{name:"vscode-icons:folder-type-db"}),l[4]||(l[4]=n("span",{class:"name"},"sql",-1))]),n("ul",null,[e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",k,[e(i,{name:"vscode-icons:file-type-sql"}),l[5]||(l[5]=n("span",{class:"name"},"xxx.sql",-1))])]),_:1}),e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",y,[e(i,{name:"vscode-icons:file-type-sql"}),l[6]||(l[6]=n("span",{class:"name"},"xxx.sql",-1))])]),_:1})])]),_:1}),e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",A,[e(i,{name:"vscode-icons:file-type-docker"}),l[7]||(l[7]=n("span",{class:"name"},"Dockerfile",-1))])]),_:1})])]),_:1}),e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",w,[e(i,{name:"vscode-icons:file-type-light-yaml"}),l[8]||(l[8]=n("span",{class:"name"},"compose.yaml",-1))])]),_:1}),e(t,{type:"file",expanded:!1,empty:!0},{default:a(()=>[n("span",x,[e(i,{name:"vscode-icons:file-type-dotenv"}),l[9]||(l[9]=n("span",{class:"name"},".env",-1))])]),_:1})])]),_:1})])])]),_:1}),l[16]||(l[16]=n("h2",{id:"新建docker工作目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#新建docker工作目录"},[n("span",null,"新建docker工作目录")])],-1)),e(c,null,{default:a(()=>l[10]||(l[10]=[n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &&"),n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," cd"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1)])),_:1}),l[17]||(l[17]=n("h2",{id:"创建dockerfile用来自定义构建容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建dockerfile用来自定义构建容器"},[n("span",null,"创建Dockerfile用来自定义构建容器")])],-1)),e(c,null,{default:a(()=>l[11]||(l[11]=[n("div",{class:"vp-steps"},[n("ol",null,[n("li",null,"新建postgres目录、conf配置文件目录、sql脚本目录（可选）")]),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &&"),n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," cd"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," conf")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," sql"),n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," # 可选")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("可以把建表sql脚本放入 "),n("strong",null,"postgres/sql"),s(" 目录下，在Dockerfile中使用 "),n("strong",null,"COPY sql/*.sql /docker-entrypoint-initdb.d/"),s(" 语句将脚本拷贝到容器内，postgres容器启动时会自动帮你执行。")])]),n("ol",{start:"2"},[n("li",null,"conf目录下新建配置文件postgresql.conf")]),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"vim"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," conf/postgresql.conf")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])])]),n("details",{class:"hint-container details"},[n("summary",null,"点我查看postgresql.conf配置"),n("div",{class:"language- line-numbers-mode","data-ext":"","data-title":""},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"# -----------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# PostgreSQL configuration file")]),s(`
`),n("span",{class:"line"},[n("span",null,"# -----------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This file consists of lines of the form:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#   name = value")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,'# (The "=" is optional.)  Whitespace may be used.  Comments are introduced with')]),s(`
`),n("span",{class:"line"},[n("span",null,'# "#" anywhere on a line.  The complete list of parameter names and allowed')]),s(`
`),n("span",{class:"line"},[n("span",null,"# values can be found in the PostgreSQL documentation.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The commented-out settings shown in this file represent the default values.")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Re-commenting a setting is NOT sufficient to revert it to the default value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"# you need to reload the server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This file is read on server startup and when the server receives a SIGHUP")]),s(`
`),n("span",{class:"line"},[n("span",null,"# signal.  If you edit the file on a running system, you have to SIGHUP the")]),s(`
`),n("span",{class:"line"},[n("span",null,'# server for the changes to take effect, run "pg_ctl reload", or execute')]),s(`
`),n("span",{class:"line"},[n("span",null,'# "SELECT pg_reload_conf()".  Some parameters, which are marked below,')]),s(`
`),n("span",{class:"line"},[n("span",null,"# require a server shutdown and restart to take effect.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Any parameter can also be given as a command-line option to the server, e.g.,")]),s(`
`),n("span",{class:"line"},[n("span",null,'# "postgres -c log_connections=on".  Some parameters can be changed at run time')]),s(`
`),n("span",{class:"line"},[n("span",null,'# with the "SET" SQL command.')]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Memory units:  B  = bytes            Time units:  us  = microseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                kB = kilobytes                     ms  = milliseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                MB = megabytes                     s   = seconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                GB = gigabytes                     min = minutes")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                TB = terabytes                     h   = hours")]),s(`
`),n("span",{class:"line"},[n("span",null,"#                                                   d   = days")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# FILE LOCATIONS")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# The default values of these variables are driven from the -D command-line")]),s(`
`),n("span",{class:"line"},[n("span",null,"# option or PGDATA environment variable, represented here as ConfigDir.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#data_directory = 'ConfigDir'		# use data in another directory")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#hba_file = 'ConfigDir/pg_hba.conf'	# host-based authentication file")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ident_file = 'ConfigDir/pg_ident.conf'	# ident configuration file")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# If external_pid_file is not explicitly set, no extra PID file is written.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#external_pid_file = ''			# write an extra PID file")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CONNECTIONS AND AUTHENTICATION")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Connection Settings -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"listen_addresses = '*'")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# comma-separated list of addresses;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# defaults to 'localhost'; use '*' for all")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#port = 5432				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"max_connections = 200			# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#reserved_connections = 0		# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#superuser_reserved_connections = 3	# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#unix_socket_directories = '/tmp'	# comma-separated list of directories")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#unix_socket_group = ''			# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#unix_socket_permissions = 0777		# begin with 0 to use octal notation")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bonjour = off				# advertise server via Bonjour")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bonjour_name = ''			# defaults to the computer name")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - TCP settings -")]),s(`
`),n("span",{class:"line"},[n("span",null,'# see "man tcp" for details')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#tcp_keepalives_idle = 0		# TCP_KEEPIDLE, in seconds;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 selects the system default")]),s(`
`),n("span",{class:"line"},[n("span",null,"#tcp_keepalives_interval = 0		# TCP_KEEPINTVL, in seconds;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 selects the system default")]),s(`
`),n("span",{class:"line"},[n("span",null,"#tcp_keepalives_count = 0		# TCP_KEEPCNT;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 selects the system default")]),s(`
`),n("span",{class:"line"},[n("span",null,"#tcp_user_timeout = 0			# TCP_USER_TIMEOUT, in milliseconds;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 selects the system default")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#client_connection_check_interval = 0	# time between checks for client")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# disconnection while running queries;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 for never")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Authentication -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#authentication_timeout = 1min		# 1s-600s")]),s(`
`),n("span",{class:"line"},[n("span",null,"#password_encryption = scram-sha-256	# scram-sha-256 or md5")]),s(`
`),n("span",{class:"line"},[n("span",null,"#scram_iterations = 4096")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# GSSAPI using Kerberos")]),s(`
`),n("span",{class:"line"},[n("span",null,"#krb_server_keyfile = 'FILE:${sysconfdir}/krb5.keytab'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#krb_caseins_users = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#gss_accept_delegation = off")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - SSL -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_ca_file = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_cert_file = 'server.crt'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_crl_file = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_crl_dir = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_key_file = 'server.key'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_ciphers = 'HIGH:MEDIUM:+3DES:!aNULL'	# allowed SSL ciphers")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_prefer_server_ciphers = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_ecdh_curve = 'prime256v1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_min_protocol_version = 'TLSv1.2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_max_protocol_version = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_dh_params_file = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_passphrase_command = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#ssl_passphrase_command_supports_reload = off")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# RESOURCE USAGE (except WAL)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Memory -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"shared_buffers = 2048MB			# min 128kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#huge_pages = try			# on, off, or try")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#huge_page_size = 0			# zero for system default")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#temp_buffers = 8MB			# min 800kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_prepared_transactions = 0		# zero disables the feature")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Caution: it is not advisable to set max_prepared_transactions nonzero unless")]),s(`
`),n("span",{class:"line"},[n("span",null,"# you actively intend to use prepared transactions.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#work_mem = 4MB				# min 64kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#hash_mem_multiplier = 2.0		# 1-1000.0 multiplier on hash table work_mem")]),s(`
`),n("span",{class:"line"},[n("span",null,"#maintenance_work_mem = 64MB		# min 64kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_work_mem = -1		# min 64kB, or -1 to use maintenance_work_mem")]),s(`
`),n("span",{class:"line"},[n("span",null,"#logical_decoding_work_mem = 64MB	# min 64kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_stack_depth = 2MB			# min 100kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#shared_memory_type = mmap		# the default is the first option")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# supported by the operating system:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   mmap")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   sysv")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   windows")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#dynamic_shared_memory_type = posix	# the default is usually the first option")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# supported by the operating system:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   posix")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   sysv")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   windows")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   mmap")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#min_dynamic_shared_memory = 0MB	# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_buffer_usage_limit = 2MB	# size of vacuum and analyze buffer access strategy ring;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 to disable vacuum buffer access strategy;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# range 128kB to 16GB")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# SLRU buffers (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#commit_timestamp_buffers = 0		# memory for pg_commit_ts (0 = auto)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#multixact_offset_buffers = 16		# memory for pg_multixact/offsets")]),s(`
`),n("span",{class:"line"},[n("span",null,"#multixact_member_buffers = 32		# memory for pg_multixact/members")]),s(`
`),n("span",{class:"line"},[n("span",null,"#notify_buffers = 16			# memory for pg_notify")]),s(`
`),n("span",{class:"line"},[n("span",null,"#serializable_buffers = 32		# memory for pg_serial")]),s(`
`),n("span",{class:"line"},[n("span",null,"#subtransaction_buffers = 0		# memory for pg_subtrans (0 = auto)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#transaction_buffers = 0		# memory for pg_xact (0 = auto)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Disk -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#temp_file_limit = -1			# limits per-process temp file space")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# in kilobytes, or -1 for no limit")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_notify_queue_pages = 1048576	# limits the number of SLRU pages allocated")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# for NOTIFY / LISTEN queue")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Kernel Resources -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_files_per_process = 1000		# min 64")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Cost-Based Vacuum Delay -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_cost_delay = 0			# 0-100 milliseconds (0 disables)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_cost_page_hit = 1		# 0-10000 credits")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_cost_page_miss = 2		# 0-10000 credits")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_cost_page_dirty = 20		# 0-10000 credits")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_cost_limit = 200		# 1-10000 credits")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Background Writer -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bgwriter_delay = 200ms			# 10-10000ms between rounds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bgwriter_lru_maxpages = 100		# max buffers written/round, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bgwriter_lru_multiplier = 2.0		# 0-10.0 multiplier on buffers scanned/round")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bgwriter_flush_after = 0		# measured in pages, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Asynchronous Behavior -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#backend_flush_after = 0		# measured in pages, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#effective_io_concurrency = 1		# 1-1000; 0 disables prefetching")]),s(`
`),n("span",{class:"line"},[n("span",null,"#maintenance_io_concurrency = 10	# 1-1000; 0 disables prefetching")]),s(`
`),n("span",{class:"line"},[n("span",null,"#io_combine_limit = 128kB		# usually 1-32 blocks (depends on OS)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_worker_processes = 8		# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_parallel_workers_per_gather = 2	# limited by max_parallel_workers")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_parallel_maintenance_workers = 2	# limited by max_parallel_workers")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_parallel_workers = 8		# number of max_worker_processes that")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# can be used in parallel operations")]),s(`
`),n("span",{class:"line"},[n("span",null,"#parallel_leader_participation = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# WRITE-AHEAD LOG")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Settings -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_level = replica			# minimal, replica, or logical")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#fsync = on				# flush data to disk for crash safety")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (turning this off can cause")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# unrecoverable data corruption)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#synchronous_commit = on		# synchronization level;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# off, local, remote_write, remote_apply, or on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_sync_method = fsync		# the default is the first option")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# supported by the operating system:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   open_datasync")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   fdatasync (default on Linux and FreeBSD)")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   fsync")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   fsync_writethrough")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   open_sync")]),s(`
`),n("span",{class:"line"},[n("span",null,"#full_page_writes = on			# recover from partial page writes")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_log_hints = off			# also do full page writes of non-critical updates")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_compression = off			# enables compression of full-page writes;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# off, pglz, lz4, zstd, or on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_init_zero = on			# zero-fill new WAL files")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_recycle = on			# recycle WAL files")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_buffers = -1			# min 32kB, -1 sets based on shared_buffers")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_writer_delay = 200ms		# 1-10000 milliseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_writer_flush_after = 1MB		# measured in pages, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_skip_threshold = 2MB")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#commit_delay = 0			# range 0-100000, in microseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"#commit_siblings = 5			# range 1-1000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Checkpoints -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#checkpoint_timeout = 5min		# range 30s-1d")]),s(`
`),n("span",{class:"line"},[n("span",null,"#checkpoint_completion_target = 0.9	# checkpoint target duration, 0.0 - 1.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"#checkpoint_flush_after = 0		# measured in pages, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#checkpoint_warning = 30s		# 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_wal_size = 1GB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#min_wal_size = 80MB")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Prefetching during recovery -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_prefetch = try	# prefetch pages referenced in the WAL?")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_decode_buffer_size = 512kB	# lookahead window used for prefetching")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Archiving -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#archive_mode = off		# enables archiving; off, on, or always")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#archive_library = ''		# library to use to archive a WAL file")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (empty string indicates archive_command should")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# be used)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#archive_command = ''		# command to use to archive a WAL file")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# placeholders: %p = path of file to archive")]),s(`
`),n("span",{class:"line"},[n("span",null,"				#               %f = file name only")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# e.g. 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#archive_timeout = 0		# force a WAL file switch after this")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# number of seconds; 0 disables")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Archive Recovery -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These are only used in recovery mode.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#restore_command = ''		# command to use to restore an archived WAL file")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# placeholders: %p = path of file to restore")]),s(`
`),n("span",{class:"line"},[n("span",null,"				#               %f = file name only")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# e.g. 'cp /mnt/server/archivedir/%f %p'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#archive_cleanup_command = ''	# command to execute at every restartpoint")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_end_command = ''	# command to execute at completion of recovery")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Recovery Target -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set these only when performing a targeted recovery.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target = ''		# 'immediate' to end recovery as soon as a")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# consistent state is reached")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_name = ''	# the named restore point to which recovery will proceed")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_time = ''	# the time stamp up to which recovery will proceed")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_xid = ''	# the transaction ID up to which recovery will proceed")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_lsn = ''	# the WAL LSN up to which recovery will proceed")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_inclusive = on	# Specifies whether to stop:")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# just after the specified recovery target (on)")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# just before the recovery target (off)")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_timeline = 'latest'	# 'current', 'latest', or timeline ID")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_target_action = 'pause'	# 'pause', 'promote', 'shutdown'")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - WAL Summarization -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#summarize_wal = off		# run WAL summarizer process?")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_summary_keep_time = '10d'	# when to remove old summary files, 0 = never")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# REPLICATION")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Sending Servers -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Set these on the primary and on any standby that will send replication data.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_wal_senders = 10		# max number of walsender processes")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_replication_slots = 10	# max number of replication slots")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_keep_size = 0		# in megabytes; 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_slot_wal_keep_size = -1	# in megabytes; -1 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_sender_timeout = 60s	# in milliseconds; 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_commit_timestamp = off	# collect timestamp of transaction commit")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Primary Server -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These settings are ignored on a standby server.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#synchronous_standby_names = ''	# standby servers that provide sync rep")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# method to choose sync standbys, number of sync standbys,")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# and comma-separated list of application_name")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# from standby(s); '*' = all")]),s(`
`),n("span",{class:"line"},[n("span",null,"#synchronized_standby_slots = ''	# streaming replication standby server slot")]),s(`
`),n("span",{class:"line"},[n("span",null,"				# names that logical walsender processes will wait for")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Standby Servers -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These settings are ignored on a primary server.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#primary_conninfo = ''			# connection string to sending server")]),s(`
`),n("span",{class:"line"},[n("span",null,"#primary_slot_name = ''			# replication slot on sending server")]),s(`
`),n("span",{class:"line"},[n("span",null,'#hot_standby = on			# "off" disallows queries during recovery')]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_standby_archive_delay = 30s	# max delay before canceling queries")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# when reading WAL from archive;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 allows indefinite delay")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_standby_streaming_delay = 30s	# max delay before canceling queries")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# when reading streaming WAL;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 allows indefinite delay")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_receiver_create_temp_slot = off	# create temp slot if primary_slot_name")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# is not set")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_receiver_status_interval = 10s	# send replies at least this often")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#hot_standby_feedback = off		# send info from standby to prevent")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# query conflicts")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_receiver_timeout = 60s		# time that receiver waits for")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# communication from primary")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# in milliseconds; 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#wal_retrieve_retry_interval = 5s	# time to wait before retrying to")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# retrieve WAL after a failed attempt")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_min_apply_delay = 0		# minimum delay for applying changes during recovery")]),s(`
`),n("span",{class:"line"},[n("span",null,"#sync_replication_slots = off		# enables slot synchronization on the physical standby from the primary")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Subscribers -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These settings are ignored on a publisher.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_logical_replication_workers = 4	# taken from max_worker_processes")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_sync_workers_per_subscription = 2	# taken from max_logical_replication_workers")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_parallel_apply_workers_per_subscription = 2	# taken from max_logical_replication_workers")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# QUERY TUNING")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Planner Method Configuration -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_async_append = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_bitmapscan = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_gathermerge = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_hashagg = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_hashjoin = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_incremental_sort = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_indexscan = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_indexonlyscan = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_material = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_memoize = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_mergejoin = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_nestloop = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_parallel_append = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_parallel_hash = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_partition_pruning = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_partitionwise_join = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_partitionwise_aggregate = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_presorted_aggregate = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_seqscan = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_sort = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_tidscan = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#enable_group_by_reordering = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Planner Cost Constants -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#seq_page_cost = 1.0			# measured on an arbitrary scale")]),s(`
`),n("span",{class:"line"},[n("span",null,"#random_page_cost = 4.0			# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#cpu_tuple_cost = 0.01			# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#cpu_index_tuple_cost = 0.005		# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#cpu_operator_cost = 0.0025		# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#parallel_setup_cost = 1000.0		# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#parallel_tuple_cost = 0.1		# same scale as above")]),s(`
`),n("span",{class:"line"},[n("span",null,"#min_parallel_table_scan_size = 8MB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#min_parallel_index_scan_size = 512kB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#effective_cache_size = 4GB")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jit_above_cost = 100000		# perform JIT compilation if available")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# and query more expensive than this;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jit_inline_above_cost = 500000		# inline small functions if query is")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# more expensive than this; -1 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jit_optimize_above_cost = 500000	# use expensive JIT optimizations if")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# query is more expensive than this;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 disables")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Genetic Query Optimizer -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_threshold = 12")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_effort = 5			# range 1-10")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_pool_size = 0			# selects default based on effort")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_generations = 0			# selects default based on effort")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_selection_bias = 2.0		# range 1.5-2.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"#geqo_seed = 0.0			# range 0.0-1.0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Other Planner Options -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_statistics_target = 100	# range 1-10000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#constraint_exclusion = partition	# on, off, or partition")]),s(`
`),n("span",{class:"line"},[n("span",null,"#cursor_tuple_fraction = 0.1		# range 0.0-1.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"#from_collapse_limit = 8")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jit = on				# allow JIT compilation")]),s(`
`),n("span",{class:"line"},[n("span",null,"#join_collapse_limit = 8		# 1 disables collapsing of explicit")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# JOIN clauses")]),s(`
`),n("span",{class:"line"},[n("span",null,"#plan_cache_mode = auto			# auto, force_generic_plan or")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# force_custom_plan")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recursive_worktable_factor = 10.0	# range 0.001-1000000")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# REPORTING AND LOGGING")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Where to Log -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_destination = 'stderr'		# Valid values are combinations of")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# stderr, csvlog, jsonlog, syslog, and")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# eventlog, depending on platform.")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# csvlog and jsonlog require")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# logging_collector to be on.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is used when logging to stderr:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#logging_collector = off		# Enable capturing of stderr, jsonlog,")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# and csvlog into log files. Required")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# to be on for csvlogs and jsonlogs.")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These are only used if logging_collector is on:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_directory = 'log'			# directory where log files are written,")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# can be absolute or relative to PGDATA")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'	# log file name pattern,")]),s(`
`),n("span",{class:"line"},[n("span",null,"							# can include strftime() escapes")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_file_mode = 0600			# creation mode for log files,")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# begin with 0 to use octal notation")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_rotation_age = 1d			# Automatic rotation of logfiles will")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# happen after that time.  0 disables.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_rotation_size = 10MB		# Automatic rotation of logfiles will")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# happen after that much log output.")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 disables.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_truncate_on_rotation = off		# If on, an existing log file with the")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# same name as the new log file will be")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# truncated rather than appended to.")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# But such truncation only occurs on")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# time-driven rotation, not on restarts")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# or size-driven rotation.  Default is")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# off, meaning append to existing files")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# in all cases.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These are relevant when logging to syslog:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#syslog_facility = 'LOCAL0'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#syslog_ident = 'postgres'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#syslog_sequence_numbers = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#syslog_split_messages = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# This is only relevant when logging to eventlog (Windows):")]),s(`
`),n("span",{class:"line"},[n("span",null,"# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#event_source = 'PostgreSQL'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - When to Log -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_min_messages = warning		# values in order of decreasing detail:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug5")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug4")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug3")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug2")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug1")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   info")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   notice")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   warning")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   error")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   log")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   fatal")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   panic")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_min_error_statement = error	# values in order of decreasing detail:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug5")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug4")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug3")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug2")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug1")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   info")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   notice")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   warning")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   error")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   log")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   fatal")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   panic (effectively off)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_min_duration_statement = -1	# -1 is disabled, 0 logs all statements")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# and their durations, > 0 logs only")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# statements running at least this number")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# of milliseconds")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_min_duration_sample = -1		# -1 is disabled, 0 logs a sample of statements")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# and their durations, > 0 logs only a sample of")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# statements running at least this number")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# of milliseconds;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# sample fraction is determined by log_statement_sample_rate")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_statement_sample_rate = 1.0	# fraction of logged statements exceeding")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# log_min_duration_sample to be logged;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 1.0 logs all such statements, 0.0 never logs")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_transaction_sample_rate = 0.0	# fraction of transactions whose statements")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# are logged regardless of their duration; 1.0 logs all")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# statements from all transactions, 0.0 never logs")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_startup_progress_interval = 10s	# Time between progress updates for")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# long-running startup operations.")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# 0 disables the feature, > 0 indicates")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# the interval in milliseconds.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - What to Log -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#debug_print_parse = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#debug_print_rewritten = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#debug_print_plan = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#debug_pretty_print = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_autovacuum_min_duration = 10min	# log autovacuum activity;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 disables, 0 logs all actions and")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# their durations, > 0 logs only")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# actions running at least this number")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# of milliseconds.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_checkpoints = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_connections = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_disconnections = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_duration = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_error_verbosity = default		# terse, default, or verbose messages")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_hostname = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_line_prefix = '%m [%p] '		# special values:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %a = application name")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %u = user name")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %d = database name")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %r = remote host and port")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %h = remote host")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %b = backend type")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %p = process ID")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %P = process ID of parallel group leader")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %t = timestamp without milliseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %m = timestamp with milliseconds")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %n = timestamp with milliseconds (as a Unix epoch)")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %Q = query ID (0 if none or not computed)")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %i = command tag")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %e = SQL state")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %c = session ID")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %l = session line number")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %s = session start timestamp")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %v = virtual transaction ID")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %x = transaction ID (0 if none)")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %q = stop here in non-session")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#        processes")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   %% = '%'")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# e.g. '<%u%%%d> '")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_lock_waits = off			# log lock waits >= deadlock_timeout")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_recovery_conflict_waits = off	# log standby recovery conflict waits")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# >= deadlock_timeout")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_parameter_max_length = -1		# when logging statements, limit logged")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# bind-parameter values to N bytes;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 means print in full, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_parameter_max_length_on_error = 0	# when logging an error, limit logged")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# bind-parameter values to N bytes;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 means print in full, 0 disables")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_statement = 'none'			# none, ddl, mod, all")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_replication_commands = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_temp_files = -1			# log temporary files equal or larger")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# than the specified size in kilobytes;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 disables, 0 logs all temp files")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_timezone = 'GMT'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Process Title -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#cluster_name = ''			# added to process titles if nonempty")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#update_process_title = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# STATISTICS")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Cumulative Query and Index Statistics -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_activities = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_activity_query_size = 1024	# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_counts = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_io_timing = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_wal_io_timing = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#track_functions = none			# none, pl, all")]),s(`
`),n("span",{class:"line"},[n("span",null,"#stats_fetch_consistency = cache	# cache, none, snapshot")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Monitoring -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#compute_query_id = auto")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_statement_stats = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_parser_stats = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_planner_stats = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#log_executor_stats = off")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# AUTOVACUUM")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum = on			# Enable autovacuum subprocess?  'on'")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# requires track_counts to also be on.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_max_workers = 3		# max number of autovacuum subprocesses")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_naptime = 1min		# time between autovacuum runs")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_threshold = 50	# min number of row updates before")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# vacuum")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_insert_threshold = 1000	# min number of row inserts")]),s(`
`),n("span",{class:"line"},[n("span",null,"						# before vacuum; -1 disables insert")]),s(`
`),n("span",{class:"line"},[n("span",null,"						# vacuums")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_analyze_threshold = 50	# min number of row updates before")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# analyze")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_scale_factor = 0.2	# fraction of table size before vacuum")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_insert_scale_factor = 0.2	# fraction of inserts over table")]),s(`
`),n("span",{class:"line"},[n("span",null,"						# size before insert vacuum")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_analyze_scale_factor = 0.1	# fraction of table size before analyze")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_freeze_max_age = 200000000	# maximum XID age before forced vacuum")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_multixact_freeze_max_age = 400000000	# maximum multixact age")]),s(`
`),n("span",{class:"line"},[n("span",null,"							# before forced vacuum")]),s(`
`),n("span",{class:"line"},[n("span",null,"							# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_cost_delay = 2ms	# default vacuum cost delay for")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# autovacuum, in milliseconds;")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# -1 means use vacuum_cost_delay")]),s(`
`),n("span",{class:"line"},[n("span",null,"#autovacuum_vacuum_cost_limit = -1	# default vacuum cost limit for")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# autovacuum, -1 means use")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# vacuum_cost_limit")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CLIENT CONNECTION DEFAULTS")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Statement Behavior -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#client_min_messages = notice		# values in order of decreasing detail:")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug5")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug4")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug3")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug2")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   debug1")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   log")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   notice")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   warning")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   error")]),s(`
`),n("span",{class:"line"},[n("span",null,`#search_path = '"$user", public'	# schema names`)]),s(`
`),n("span",{class:"line"},[n("span",null,"#row_security = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_table_access_method = 'heap'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_tablespace = ''		# a tablespace name, '' uses the default")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_toast_compression = 'pglz'	# 'pglz' or 'lz4'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#temp_tablespaces = ''			# a list of tablespace names, '' uses")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# only default tablespace")]),s(`
`),n("span",{class:"line"},[n("span",null,"#check_function_bodies = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_transaction_isolation = 'read committed'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_transaction_read_only = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_transaction_deferrable = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#session_replication_role = 'origin'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#statement_timeout = 0				# in milliseconds, 0 is disabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"#transaction_timeout = 0			# in milliseconds, 0 is disabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lock_timeout = 0				# in milliseconds, 0 is disabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"#idle_in_transaction_session_timeout = 0	# in milliseconds, 0 is disabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"#idle_session_timeout = 0			# in milliseconds, 0 is disabled")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_freeze_table_age = 150000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_freeze_min_age = 50000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_failsafe_age = 1600000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_multixact_freeze_table_age = 150000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_multixact_freeze_min_age = 5000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#vacuum_multixact_failsafe_age = 1600000000")]),s(`
`),n("span",{class:"line"},[n("span",null,"#bytea_output = 'hex'			# hex, escape")]),s(`
`),n("span",{class:"line"},[n("span",null,"#xmlbinary = 'base64'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#xmloption = 'content'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#gin_pending_list_limit = 4MB")]),s(`
`),n("span",{class:"line"},[n("span",null,"#createrole_self_grant = ''		# set and/or inherit")]),s(`
`),n("span",{class:"line"},[n("span",null,"#event_triggers = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Locale and Formatting -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#datestyle = 'iso, mdy'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#intervalstyle = 'postgres'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#timezone = 'GMT'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#timezone_abbreviations = 'Default'	# Select the set of available time zone")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# abbreviations.  Currently, there are")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   Default")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   Australia (historical usage)")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#   India")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# You can create your own file in")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# share/timezonesets/.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#extra_float_digits = 1			# min -15, max 3; any value >0 actually")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# selects precise output mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"#client_encoding = sql_ascii		# actually, defaults to database")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# encoding")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These settings are initialized by initdb, but they can be changed.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lc_messages = ''			# locale for system error message")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# strings")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lc_monetary = 'C'			# locale for monetary formatting")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lc_numeric = 'C'			# locale for number formatting")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lc_time = 'C'				# locale for time formatting")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#icu_validation_level = warning		# report ICU locale validation")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# errors at the given level")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default configuration for text search")]),s(`
`),n("span",{class:"line"},[n("span",null,"#default_text_search_config = 'pg_catalog.simple'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Shared Library Preloading -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#local_preload_libraries = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#session_preload_libraries = ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"#shared_preload_libraries = ''		# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jit_provider = 'llvmjit'		# JIT library to use")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Other Defaults -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#dynamic_library_path = '$libdir'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#extension_destdir = ''			# prepend path when loading extensions")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# and shared objects (added by Debian)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#gin_fuzzy_search_limit = 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# LOCK MANAGEMENT")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#deadlock_timeout = 1s")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_locks_per_transaction = 64		# min 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_pred_locks_per_transaction = 64	# min 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_pred_locks_per_relation = -2	# negative values mean")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (max_pred_locks_per_transaction")]),s(`
`),n("span",{class:"line"},[n("span",null,"					#  / -max_pred_locks_per_relation) - 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"#max_pred_locks_per_page = 2		# min 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# VERSION AND PLATFORM COMPATIBILITY")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Previous PostgreSQL Versions -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#array_nulls = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#backslash_quote = safe_encoding	# on, off, or safe_encoding")]),s(`
`),n("span",{class:"line"},[n("span",null,"#escape_string_warning = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#lo_compat_privileges = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#quote_all_identifiers = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#standard_conforming_strings = on")]),s(`
`),n("span",{class:"line"},[n("span",null,"#synchronize_seqscans = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# - Other Platforms and Clients -")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#transform_null_equals = off")]),s(`
`),n("span",{class:"line"},[n("span",null,"#allow_alter_system = on")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# ERROR HANDLING")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#exit_on_error = off			# terminate session on any error?")]),s(`
`),n("span",{class:"line"},[n("span",null,"#restart_after_crash = on		# reinitialize after backend crash?")]),s(`
`),n("span",{class:"line"},[n("span",null,"#data_sync_retry = off			# retry or panic on failure to fsync")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# data?")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# (change requires restart)")]),s(`
`),n("span",{class:"line"},[n("span",null,"#recovery_init_sync_method = fsync	# fsync, syncfs (Linux 5.8+)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CONFIG FILE INCLUDES")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# These options allow settings to be loaded from files other than the")]),s(`
`),n("span",{class:"line"},[n("span",null,"# default postgresql.conf.  Note that these are directives, not variable")]),s(`
`),n("span",{class:"line"},[n("span",null,"# assignments, so they can usefully be given more than once.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include_dir = '...'			# include files ending in '.conf' from")]),s(`
`),n("span",{class:"line"},[n("span",null,"					# a directory, e.g., 'conf.d'")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include_if_exists = '...'		# include file only if it exists")]),s(`
`),n("span",{class:"line"},[n("span",null,"#include = '...'			# include file")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span",null,"# CUSTOMIZED OPTIONS")]),s(`
`),n("span",{class:"line"},[n("span",null,"#------------------------------------------------------------------------------")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# Add settings for extensions here")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"配置文件是从postgres容器内拷贝出来的，修改了最大连接数和shared_buffers内存大小，如有需要可自行修改")]),n("ol",{start:"3"},[n("li",null,"创建Dockerfile文件")]),n("div",{class:"language-dockerfile line-numbers-mode","data-ext":"dockerfile","data-title":"dockerfile"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"FROM"),n("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," postgres:17.2-alpine")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# COPY sql/ry_*.sql /docker-entrypoint-initdb.d/ # 可选")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1)])),_:1}),l[18]||(l[18]=n("h2",{id:"创建docker-compose配置文件-compose-yaml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建docker-compose配置文件-compose-yaml"},[n("span",null,"创建docker compose配置文件 compose.yaml")])],-1)),e(c,null,{default:a(()=>l[12]||(l[12]=[n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("ul",null,[n("li",null,[s("数据卷都挂载在 "),n("strong",null,"${HOME}/data/postgres"),s(" 目录下，请提前创建好对应目录，也可自行修改挂载目录")]),n("li",null,[n("strong",null,"postgresql.conf"),s(" 配置文件需要拷贝到 "),n("strong",null,"${HOME}/data/postgres/conf"),s(" 目录下")])]),n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ${"),n("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"HOME"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/data/postgres/conf")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"mkdir"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -p"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ${"),n("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"HOME"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/data/postgres/data")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),n("div",{class:"language-yaml line-numbers-mode","data-ext":"yaml","data-title":"yaml"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"services"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  postgres"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    build"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      context"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      dockerfile"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," Dockerfile")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    image"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres:17.2-alpine")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    container_name"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    restart"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," always")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    user"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${UID}:${GID}")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    networks"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," docker_net0")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    ports"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 5432:5432")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    environment"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      TZ"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," Asia/Shanghai")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      POSTGRES_PASSWORD"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${POSTGRES_PASSWORD:-admin@123456}")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    # 指定配置文件启动")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    command"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ["),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"postgres"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"-c"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"config_file=/etc/postgresql/postgresql.conf"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    volumes"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"      # 数据目录挂载")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${HOME}/data/postgres/data:/var/lib/postgresql/data")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      -"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ${HOME}/data/postgres/conf/postgresql.conf:/etc/postgresql/postgresql.conf")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"networks"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  # 自定义一个桥接网络")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  docker_net0"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"以下环境变量可自行修改"),n("ul",null,[n("li",null,"POSTGRES_PASSWORD: 登陆密码，必填"),n("li",null,"POSTGRES_USER: 登录用户，选填，默认为postgres"),n("li",null,"POSTGRES_DB: 数据库，选填，默认为postgres")])],-1)])),_:1}),l[19]||(l[19]=n("h2",{id:"构建并启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建并启动"},[n("span",null,"构建并启动")])],-1)),e(c,null,{default:a(()=>l[13]||(l[13]=[n("div",{class:"language-shell line-numbers-mode","data-ext":"shell","data-title":"shell"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"echo"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -e"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"UID="),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"id"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -u"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"\\nGID="),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"id"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -g"),n("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),n("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),n("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," >"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," .env")]),s(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"docker"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," compose"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," up"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --build"),n("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -d"),n("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," postgres")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[20]||(l[20]=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考"},[n("span",null,"参考")])],-1)),e(c,null,{default:a(()=>l[14]||(l[14]=[n("ul",null,[n("li",null,[n("a",{href:"https://docs.docker.com/manuals",target:"_blank",rel:"noopener noreferrer"},"Docker官方手册")]),n("li",null,[n("a",{href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"},"Docker官方参考文档")]),n("li",null,[n("a",{href:"https://postgres.ac.cn/docs/17/index.html",target:"_blank",rel:"noopener noreferrer"},"PostgreSQL文档")]),n("li",null,[n("a",{href:"https://github.com/docker-library/docs/blob/master/postgres/README.md",target:"_blank",rel:"noopener noreferrer"},"Docker PostgreSQL镜像手册")])],-1)])),_:1})])}const C=p(m,[["render",B],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/article/fskiz8q5/","title":"Docker安装postgresql","lang":"zh-CN","frontmatter":{"title":"Docker安装postgresql","tags":["docker","postgresql"],"createTime":"2024/12/28 19:23:46","permalink":"/article/fskiz8q5/","description":"注意 以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。 注意 使用non-root用户启动容器，默认当前用户，如有需要请自行更改 docker工作目录树 新建docker工作目录 创建Dockerfile用来自定义构建容器 创建docker compose配置文件 compose.yaml 构建并启动 参考","head":[["meta",{"property":"og:url","content":"https://blog.shaocz.me/article/fskiz8q5/"}],["meta",{"property":"og:site_name","content":"未眠的蓝鸟"}],["meta",{"property":"og:title","content":"Docker安装postgresql"}],["meta",{"property":"og:description","content":"注意 以下操作都在Ubuntu环境下进行，也可在其他Linux系统下操作，但如果出现问题请自行解决。 注意 使用non-root用户启动容器，默认当前用户，如有需要请自行更改 docker工作目录树 新建docker工作目录 创建Dockerfile用来自定义构建容器 创建docker compose配置文件 compose.yaml 构建并启动 参考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T13:58:15.000Z"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"postgresql"}],["meta",{"property":"article:modified_time","content":"2025-01-10T13:58:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker安装postgresql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T13:58:15.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":11.87,"words":3561},"git":{"updatedTime":1736517495000,"contributors":[{"name":"未眠的蓝鸟","username":"未眠的蓝鸟","email":"october4th@88.com","commits":4,"avatar":"https://avatars.githubusercontent.com/未眠的蓝鸟?v=4","url":"https://github.com/未眠的蓝鸟"}]},"autoDesc":true,"filePathRelative":"docker/Docker安装postgresql.md","categoryList":[{"id":"05b605","sort":10001,"name":"docker"}],"bulletin":false}');export{C as comp,T as data};
