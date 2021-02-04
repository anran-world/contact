define(["exports","./when-54c2dc71","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./PolylineVolumeGeometryLibrary-0216ec14","./PolylinePipeline-7685bebd"],function(a,s,O,R,u,V,Q){"use strict";var e={},U=new R.Cartesian3,d=new R.Cartesian3,p=new R.Cartesian3,m=new R.Cartesian3,G=[new R.Cartesian3,new R.Cartesian3],I=new R.Cartesian3,q=new R.Cartesian3,j=new R.Cartesian3,k=new R.Cartesian3,F=new R.Cartesian3,H=new R.Cartesian3,J=new R.Cartesian3,K=new R.Cartesian3,W=new R.Cartesian3,X=new R.Cartesian3,c=new u.Quaternion,g=new u.Matrix3;function Y(a,e,r,n,t){var i,s=R.Cartesian3.angleBetween(R.Cartesian3.subtract(e,a,U),R.Cartesian3.subtract(r,a,d)),o=n===V.CornerType.BEVELED?1:Math.ceil(s/O.CesiumMath.toRadians(5))+1,n=3*o,C=new Array(n);C[n-3]=r.x,C[n-2]=r.y,C[n-1]=r.z,i=t?u.Matrix3.fromQuaternion(u.Quaternion.fromAxisAngle(R.Cartesian3.negate(a,U),s/o,c),g):u.Matrix3.fromQuaternion(u.Quaternion.fromAxisAngle(a,s/o,c),g);var l=0;e=R.Cartesian3.clone(e,U);for(var y=0;y<o;y++)e=u.Matrix3.multiplyByVector(i,e,e),C[l++]=e.x,C[l++]=e.y,C[l++]=e.z;return C}function Z(a,e,r,n){var t=U;return[(t=(n||(e=R.Cartesian3.negate(e,e)),R.Cartesian3.add(a,e,t))).x,t.y,t.z,r.x,r.y,r.z]}function $(a,e,r,n){for(var t=new Array(a.length),i=new Array(a.length),s=R.Cartesian3.multiplyByScalar(e,r,U),o=R.Cartesian3.negate(s,d),C=0,l=a.length-1,y=0;y<a.length;y+=3){var u=R.Cartesian3.fromArray(a,y,p),c=R.Cartesian3.add(u,o,m);t[C++]=c.x,t[C++]=c.y,t[C++]=c.z;u=R.Cartesian3.add(u,s,m);i[l--]=u.z,i[l--]=u.y,i[l--]=u.x}return n.push(t,i),n}e.addAttribute=function(a,e,r,n){var t=e.x,i=e.y,e=e.z;s.defined(r)&&(a[r]=t,a[r+1]=i,a[r+2]=e),s.defined(n)&&(a[n]=e,a[n-1]=i,a[n-2]=t)};var _=new R.Cartesian3,aa=new R.Cartesian3;e.computePositions=function(a){var e=a.granularity,r=a.positions,n=a.ellipsoid,t=a.width/2,i=a.cornerType,s=a.saveAttributes,o=I,C=q,l=j,y=k,u=F,c=H,d=J,p=K,m=W,g=X,h=[],f=s?[]:void 0,w=s?[]:void 0,z=r[0],x=r[1],C=R.Cartesian3.normalize(R.Cartesian3.subtract(x,z,C),C),o=n.geodeticSurfaceNormal(z,o),y=R.Cartesian3.normalize(R.Cartesian3.cross(o,C,y),y);s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),d=R.Cartesian3.clone(z,d),z=x,l=R.Cartesian3.negate(C,l);for(var P,A,B,v,E,S,b,D=[],M=r.length,T=1;T<M-1;T++){o=n.geodeticSurfaceNormal(z,o),x=r[T+1],C=R.Cartesian3.normalize(R.Cartesian3.subtract(x,z,C),C),u=R.Cartesian3.normalize(R.Cartesian3.add(C,l,u),u);var N=R.Cartesian3.multiplyByScalar(o,R.Cartesian3.dot(C,o),_);R.Cartesian3.subtract(C,N,N),R.Cartesian3.normalize(N,N);var L=R.Cartesian3.multiplyByScalar(o,R.Cartesian3.dot(l,o),aa);R.Cartesian3.subtract(l,L,L),R.Cartesian3.normalize(L,L),O.CesiumMath.equalsEpsilon(Math.abs(R.Cartesian3.dot(N,L)),1,O.CesiumMath.EPSILON7)||(u=R.Cartesian3.cross(u,o,u),u=R.Cartesian3.cross(o,u,u),u=R.Cartesian3.normalize(u,u),N=t/Math.max(.25,R.Cartesian3.magnitude(R.Cartesian3.cross(u,l,U))),L=V.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(C,l,z,n),u=R.Cartesian3.multiplyByScalar(u,N,u),L?(p=R.Cartesian3.add(z,u,p),g=R.Cartesian3.add(p,R.Cartesian3.multiplyByScalar(y,t,g),g),m=R.Cartesian3.add(p,R.Cartesian3.multiplyByScalar(y,2*t,m),m),G[0]=R.Cartesian3.clone(d,G[0]),G[1]=R.Cartesian3.clone(g,G[1]),h=$(Q.PolylinePipeline.generateArc({positions:G,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=R.Cartesian3.clone(m,c),y=R.Cartesian3.normalize(R.Cartesian3.cross(o,C,y),y),m=R.Cartesian3.add(p,R.Cartesian3.multiplyByScalar(y,2*t,m),m),d=R.Cartesian3.add(p,R.Cartesian3.multiplyByScalar(y,t,d),d),i===V.CornerType.ROUNDED||i===V.CornerType.BEVELED?D.push({leftPositions:Y(p,c,m,i,L)}):D.push({leftPositions:Z(z,R.Cartesian3.negate(u,u),m,L)})):(m=R.Cartesian3.add(z,u,m),g=R.Cartesian3.add(m,R.Cartesian3.negate(R.Cartesian3.multiplyByScalar(y,t,g),g),g),p=R.Cartesian3.add(m,R.Cartesian3.negate(R.Cartesian3.multiplyByScalar(y,2*t,p),p),p),G[0]=R.Cartesian3.clone(d,G[0]),G[1]=R.Cartesian3.clone(g,G[1]),h=$(Q.PolylinePipeline.generateArc({positions:G,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=R.Cartesian3.clone(p,c),y=R.Cartesian3.normalize(R.Cartesian3.cross(o,C,y),y),p=R.Cartesian3.add(m,R.Cartesian3.negate(R.Cartesian3.multiplyByScalar(y,2*t,p),p),p),d=R.Cartesian3.add(m,R.Cartesian3.negate(R.Cartesian3.multiplyByScalar(y,t,d),d),d),i===V.CornerType.ROUNDED||i===V.CornerType.BEVELED?D.push({rightPositions:Y(m,c,p,i,L)}):D.push({rightPositions:Z(z,u,p,L)})),l=R.Cartesian3.negate(C,l)),z=x}return o=n.geodeticSurfaceNormal(z,o),G[0]=R.Cartesian3.clone(d,G[0]),G[1]=R.Cartesian3.clone(z,G[1]),h=$(Q.PolylinePipeline.generateArc({positions:G,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),i===V.CornerType.ROUNDED&&(A=I,B=q,v=j,E=(P=h)[1],B=R.Cartesian3.fromArray(P[1],E.length-3,B),v=R.Cartesian3.fromArray(P[0],0,v),S=Y(A=R.Cartesian3.midpoint(B,v,A),B,v,V.CornerType.ROUNDED,!1),b=P.length-1,a=P[b-1],E=P[b],B=R.Cartesian3.fromArray(a,a.length-3,B),v=R.Cartesian3.fromArray(E,0,v),v=[S,Y(A=R.Cartesian3.midpoint(B,v,A),B,v,V.CornerType.ROUNDED,!1)]),{positions:h,corners:D,lefts:f,normals:w,endPositions:v}},a.CorridorGeometryLibrary=e});
