(function() {var implementors = {};
implementors["actix_files"] = [{"text":"impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_files/struct.Files.html\" title=\"struct actix_files::Files\">Files</a>","synthetic":false,"types":["actix_files::files::Files"]},{"text":"impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_files/struct.NamedFile.html\" title=\"struct actix_files::NamedFile\">NamedFile</a>","synthetic":false,"types":["actix_files::named::NamedFile"]}];
implementors["actix_http"] = [{"text":"impl&lt;T, S, B, X, U&gt; ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"actix_http/enum.Protocol.html\" title=\"enum actix_http::Protocol\">Protocol</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/struct.HttpService.html\" title=\"struct actix_http::HttpService\">HttpService</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::service::HttpService"]},{"text":"impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt;&gt;&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>","synthetic":false,"types":["actix_http::h1::expect::ExpectHandler"]},{"text":"impl&lt;T, S, B, X, U&gt; ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.H1Service.html\" title=\"struct actix_http::h1::H1Service\">H1Service</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::h1::service::H1Service"]},{"text":"impl&lt;T&gt; ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt;&gt;, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>","synthetic":false,"types":["actix_http::h1::upgrade::UpgradeHandler"]},{"text":"impl&lt;T, S, B&gt; ServiceFactory&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"actix_http/h2/struct.H2Service.html\" title=\"struct actix_http::h2::H2Service\">H2Service</a>&lt;T, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"enum\" href=\"actix_http/body/enum.AnyBody.html\" title=\"enum actix_http::body::AnyBody\">AnyBody</a>&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"actix_http/body/trait.MessageBody.html#associatedtype.Error\" title=\"type actix_http::body::MessageBody::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["actix_http::h2::service::H2Service"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()