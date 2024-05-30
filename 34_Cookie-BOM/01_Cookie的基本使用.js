// Cookie可分为内存Cookie和硬盘Cookie
//    内存Cookie由浏览器维护，保存在内存中，浏览器关闭时Cookie就会消失，其存在时间是短暂的；
//    硬盘Cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理；
// 如何判断一个cookie是内存cookie还是硬盘cookie？
//    没有设置过期时间，默认情况下cookie是内存cookie，再关闭浏览器时会自动删除；
//    有设置过期时间，并且过期时间不为0或者负数的cookie，是硬盘cookie，需要手动或者到期时，才会删除；

// cookie的生命周期：
//    默认情况下的cookie是内存cookie，也称之为会话cookie，也就是在浏览器关闭时会自动被删除；
//    我们可以通过设置expires或者max-age来设置过期的时间；
//        expire：设置的是Date.toUTCString()，设置格式是expires = date-in-GMTString-format
//        max-age：设置过期的秒数，设置格式是max-age = max-age-in-seconds