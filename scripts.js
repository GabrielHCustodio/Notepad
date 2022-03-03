// select
const select = document.querySelector('#select-type')

select.addEventListener('change' , () => {
    var check = document.querySelector('#check').value

    if(select.value === check) {
        var checklist = document.querySelector('.checklist')
        var note = document.querySelector('.notes').innerHTML = ""

        checklist.innerHTML = `
            <div class="activity">
                    <input type="text" id="act" placeholder="Informe a atividade">
                    <input type="button" id="add" value="Adicionar">
                </div>
                <!--activity-->

                <div class="activity-add">
                </div>
            <!--activity-ad-->
        `

        addActivity()
    } else {
        var note = document.querySelector('.notes')
        var checklist = document.querySelector('.checklist').innerHTML = ""

        note.innerHTML = `
            <textarea name="notes" id="" cols="30" rows="10"></textarea>
        `
    }
})

// title
function keepTitle() {
    var keep = document.querySelector('input[type=button]')

    keep.addEventListener('click' , () => {
        var newTitle = document.querySelector('#title-add')
        var title = document.querySelector('input[type=text]')
        var inputs = document.querySelector('.inputs-title')
    
        newTitle.innerHTML = `${title.value}`
        inputs.innerHTML = ""
    })
}

keepTitle()

// checklist
function addActivity() {
    var buttonAd = document.querySelector('#add')
    buttonAd.addEventListener('click' , () => {
        var checkAct = document.querySelector('.activity-add')
        var activity = document.querySelector('#act').value
        
        checkAct.innerHTML += `
        <div class="checked">
            <input type="checkbox" name="activity" id="activity">
            <label for="activity"></label>
            <p id="newActivity">${activity}</p>
            <img src="./assets/trash.svg" alt="trash" id="trash" onclick="deleteAct()">
        </div>
        <!--checked-->

        <div class="clear"></div>
        `
    })
}

// delete item

function deleteAct() {
    
}