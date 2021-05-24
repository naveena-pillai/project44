var artClassImg, classroomImg, gymImage, hallwayImg, lunchroomImg;
var boyStudentImg, girlStudentImg, meanTeacherImg, teacherImg, tomWalkAnimation, tomStandingImg;
var tom, teacher;
var classroom;


function preload(){
    artClassImg = loadImage("backgrounds/artClassroom.png");
    classroomImg = loadImage("backgrounds/classroom1.jpg");
    gymImage = loadImage("backgrounds/gym.jpg");
    hallwayImg = loadImage("backgrounds/hallway.png");
    lunchroomImg = loadImage("backgrounds/lunchroom.jpg");

    boyStudentImg = loadImage("sprites/boyStudent.png");
    girlStudentImg = loadImage("sprites/girlStudent.png");
    meanTeacherImg = loadImage("sprites/meanTeacher.png");
    teacherImg = loadImage("sprites/teacher1.png");

    tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" )
    tomStandingImg = loadImage("tom/boy3.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(400,650,40,40);
    tom.addImage(tomStandingImg);
    tom.scale = 0.7;

    teacher = createSprite(650, 380, 40, 40);
    teacher.addImage(teacherImg);
    teacher.scale = 0.6;

    classroom = new Classroom();
}

function draw(){
    background(classroomImg);
    classroom.display();
    drawSprites();
}