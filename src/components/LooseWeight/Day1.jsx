import React, { useState } from 'react'

export default function Day1() {
    const [isOpened, setOpen] = useState(false)
    function handleOpen () {
        setOpen(!isOpened)
    }
    const day1Plan = [
        {
            name: 'Barbell Bench Press',
            set: 3,
            reps: '15,12,10',
            imgUrl: 'https://homegymreview.co.uk/wp-content/uploads/2020/12/00251101-Barbell-Bench-Press-Chest-Guide-1024x507.jpg',
            videoUrl: ''
        },
        {
            name: 'Barbell Row',
            set: 3,
            reps: '12,10,8',
            imgUrl: 'https://bodybuilding-wizard.com/wp-content/uploads/2014/04/barbell-row-for-latissimus-dorsi.jpg',
            videoUrl: ''
        },
        {
            name: 'Dumbbell Lateral Raise',
            set: 3,
            reps: '12,10,8',
            imgUrl: 'https://www.burnthefatinnercircle.com/members/images/1509c.jpg?cb=20220105104726',
            videoUrl: ''
        },
        {
            name: 'Wide Grip Lat Pulldown',
            set: 3,
            reps: '12',
            imgUrl: 'https://www.bodybuildingmealplan.com/wp-content/uploads/Wide-Grip-Lat-Pulldown-Muscles-Worked-2.png',
            videoUrl: ''
        },
        {
            name: 'Cable Triceps Pushdown',
            set: 3,
            reps: '12',
            imgUrl: 'https://cdn-bcpoc.nitrocdn.com/TKqfpmIjZIVcmnkUTvWEFXVhMTTVDydg/assets/images/optimized/rev-f9c7a0c/wp-content/uploads/exercises/22491101-Cable-Triceps-Pushdown-V-bar-female_Upper-Arms_max-scaled.jpg',
            videoUrl: ''
        },
        {
            name: 'Preacher Curl',
            set: 2,
            reps: '12',
            imgUrl: 'https://gymvisual.com/13476-thickbox_default/lever-preacher-curl-plate-loaded-female.jpg',
            videoUrl: ''
        }
    ]
    return (
        <div>
            <button className='p-5 rounded-full border-2 bg-blue-500 text-white w-full' onClick={handleOpen}>Ngày 1: Upper body</button>
            {day1Plan.map((plan) => {
                if(!isOpened) {
                    return null
                } else {
                    return(
                        <div className='my-5'>
                            <h3>{plan.name}</h3>
                            <p>{plan.reps}x{plan.set}sets</p>
                            <p>Ảnh minh họa:</p>
                            <img src={plan.imgUrl} alt="" />
                        </div>
                    )
                }
            })}
        </div>
    )
}
