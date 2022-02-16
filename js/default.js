
/*------------------------------------------------ Chạy ảnh ---------------------------------*/
$(document).ready(function() {
$('#previous').on('click', function(){
// Change to the previous totalImages
$('#im_' + currentImage).stop().fadeOut(1);
decreaseImage();
$('#im_' + currentImage).stop().fadeIn(1);
}); 

$('#next').on('click', function(){
// Change to the next image
$('#im_' + currentImage).stop().fadeOut(1);
increaseImage();
$('#im_' + currentImage).stop().fadeIn(1);
}); 

var currentImage = 1;
var totalImages = 3;

function increaseImage() {
/* Increase currentImage by 1.
* Resets to 1 if larger than totalImages
*/
++currentImage;
if(currentImage > totalImages) {
currentImage = 1;
}
}
function decreaseImage() {
/* Decrease currentImage by 1.
* Resets to totalImages if smaller than 1
*/
--currentImage;
if(currentImage < 1) {
currentImage = totalImages;
}
}
});

    /*---------------------------------------- hien man hinh -------------------------------*/
    $(document).ready(function() {
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào cuối thẻ body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);
        
        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() { 
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();  
        }); 
        return false;
    });
    
});

/*------------------------------------------------ slide show --------------------------------------*/

var count=0;
    var mang_anh=[];
    mang_anh[0]='picture/anh bia/anh bia 1.png';
    mang_anh[1]='picture/anh bia/anh bia 2.png';
    mang_anh[2]='picture/anh bia/anh bia 3.png';
    mang_anh[3]='picture/anh bia/anh bia 4.png';
    function nextt(){
        count++;
        if(count > 3){
            count=0;
        }
        document.images['slide'].src=mang_anh[count];
        $("li").removeClass('active'); // khi mình next thì li có hiệu ứng class sẽ bị mất
        $("li").eq(count).addClass('active');//tương tự khi next thì addClass vào li tiếp theo
    }
    function prev(){
        count--;
        if(count < 0){
            count=3;
        }
        document.images['slide'].src=mang_anh[count];
        $("li").removeClass('active');
        $("li").eq(count).addClass('active');
    }
    setInterval(function(){
        nextt();
        
        },2000)
/*------------------------------------------------ Chạy ảnh ---------------------------------*/
$(document).ready(function() {
$('#prevs').on('click', function(){
// Change to the previous totalImages
$('#im_' + currentImage).stop().fadeOut(1);
decreaseImage();
$('#im_' + currentImage).stop().fadeIn(1);
}); 

$('#nexts').on('click', function(){
// Change to the next image
$('#im_' + currentImage).stop().fadeOut(1);
increaseImage();
$('#im_' + currentImage).stop().fadeIn(1);
}); 

var currentImage = 1;
var totalImages = 3;

function increaseImage() {
/* Increase currentImage by 1.
* Resets to 1 if larger than totalImages
*/
++currentImage;
if(currentImage > totalImages) {
currentImage = 1;
}
}
function decreaseImage() {
/* Decrease currentImage by 1.
* Resets to totalImages if smaller than 1
*/
--currentImage;
if(currentImage < 1) {
currentImage = totalImages;
}
}
});
/*------------------------------- Tính Tiền --------------------------*/
$(document).ready(function(e) {
        $("#txtsl").change(function(e) {
            var s = $("#txtsl").val()*$("#txtgia").val();
        $("#txttongtien").text(s);        
        });

    });

/*---------------------------------Check Form ---------------------- */
$(document).ready(function() {
        $("#fr-dat-hang").validate({
                    rules: {
                        txthoten: "required",
                        txtsdt: {
                            required: true,
                            minlength: 5,
                            number: true
                        },
                        txtemail: {
                            required: true,
                            email: true
                        },
                        txtsl: {
                            required: true,
                        },
                        txtnoidung: {
                            required: true,
                            minlength: 20,
                            maxlength: 500
                        }, 
                        txtcheck: "required"
                    },
                    messages: {
                        txthoten: "Vui lòng nhập họ và tên.",
                        txtsdt: {
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực",
                            number: "Yêu cầu nhập số."
                        },
                        txtemail: {
                            required: "Vui lòng nhập email.",
                            email: "Yêu cầu nhập đúng email."
                        },
                        txtsl: {
                            required: "Yêu cầu nhập số lượng.",
                        },
                        txtnoidung: {
                            required: "Yêu cầu nhập địa chỉ.",
                            minlength: "Yêu cầu nhập tối thiểu 20 kí tự.",
                            maxlength: "Yêu cầu nhập tối đa 500 kí tự."
                        },
                        txtcheck: "Yêu cầu xác nhận đồng ý nội dung góp ý.",
                        
                    }
                });
    });
$(document).ready(function() {
        $("#fr-gop-y").validate({
                    rules: {
                        txthoten: "required",
                        txtsdt: {
                            required: true,
                            minlength: 5,
                            number: true
                        },
                        txtemail: {
                            required: true,
                            email: true
                        },
                        txtnoidung: {
                            required: true,
                            minlength: 20,
                            maxlength: 500
                        }, 
                        txtcheck: "required"
                    },
                    messages: {
                        txthoten: "Vui lòng nhập họ và tên.",
                        txtsdt: {
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực",
                            number: "Yêu cầu nhập số."
                        },
                        txtemail: {
                            required: "Vui lòng nhập email.",
                            email: "Yêu cầu nhập đúng email."
                        },
                        txtnoidung: {
                            required: "Yêu cầu nhập nội dung góp ý.",
                            minlength: "Yêu cầu nhập tối thiểu 20 kí tự.",
                            maxlength: "Yêu cầu nhập tối đa 500 kí tự."
                        },
                        txtcheck: "Yêu cầu xác nhận đồng ý nội dung góp ý.",
                        
                    }
                });
    });
$(document).ready(function() {
        $("#fr-dang-nhap").validate({
                    rules: {
                        txtusername: {
                            required: true,
                            minlength:5,
                            maxlength:12,
                        },
                        txtpassword: {
                            required: true,
                            minlength: 5,
                            maxlength: 12,
                        },
                    },
                    messages: {
                        txtusername: {
                            required:"Vui lòng nhập tài khoản.",
                            minlength: "Tài khoản không hợp lệ tối thiểu 5 kí tự.",
                            maxlength: "Tài khoản không hợp lệ tối đa 12 kí tự.",
                        },
                        txtpassword: {
                            required:"Vui lòng nhập password.",
                            minlength: "Mật khẩu không hợp lệ tối thiểu 5 kí tự.",
                            maxlength: "Mật khẩu không hợp lệ tối đa 12 kí tự.",
                        },
                        
                    }
                });
    });
$(document).ready(function() {
        $("#fr-dang-ky").validate({
                    rules: {
                        txtusername: {
                            required: true,
                            minlength:5,
                            maxlength:12,
                        },
                        txtpassword: {
                            required: true,
                            minlength: 5,
                            maxlength: 12,
                        },
                        txtrepassword: {
                            required: true,
                            equalTo: "#txtpassword",
                        },
                        txtemail: {
                            required: true,
                            email: true
                        },
                        txtphone: {
                            required: true,
                            minlength: 5,
                            maxlength: 12,
                            number: true
                        },
                    },
                    messages: {
                        txtusername: {
                            required:"Vui lòng nhập tài khoản",
                            minlength: "Tài khoản không hợp lệ tối thiểu 5 kí tự.",
                            maxlength: "Tài khoản không hợp lệ tối đa 12 kí tự.",
                        },
                        txtpassword: {
                            required:"Vui lòng nhập password.",
                            minlength: "Mật khẩu không hợp lệ tối thiểu 5 kí tự.",
                            maxlength: "Mật khẩu không hợp lệ tối đa 12 kí tự.",
                        },
                        txtrepassword: {
                            required: "Vui lòng nhập lại password.",
                            equalTo: "Vui lòng nhập trùng mật khẩu."
                        },
                        txtemail: {
                            required: "Vui lòng nhập email.",
                            email: "Yêu cầu nhập đúng email."
                        },
                        txtphone: {
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực",
                            maxlength: "Số máy quý khách vừa nhập là số không có thực",
                            number: "Yêu cầu nhập số."
                        },
                        
                    }
                });
    });
$(document).ready(function() {
        $("#fr-quen-mat-khau").validate({
                    rules: {
                        txtemail: {
                            required: true,
                            email: true
                        },
                        txtphone: {
                            required: true,
                            minlength: 5,
                            maxlength: 12,
                            number: true
                        },
                    },
                    messages: {
                        txtemail: {
                            required: "Vui lòng nhập email.",
                            email: "Yêu cầu nhập đúng email."
                        },
                        txtphone: {
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực",
                            maxlength: "Số máy quý khách vừa nhập là số không có thực",
                            number: "Yêu cầu nhập số."
                        },
                        
                    }
                });
    });



