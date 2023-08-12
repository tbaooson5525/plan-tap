import React, { useState } from 'react'

export default function Day3() {
    const [isOpened, setOpen] = useState(false)
    function handleOpen () {
        setOpen(!isOpened)
    }
    const day3Plan = [
        {
            name: 'Dumbbell Bench Press',
            set: 3,
            reps: '15,12,10',
            imgUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-bench-press-variations.jpg',
            videoUrl: ''
        },
        {
            name: 'One Arm Dumbbell Row',
            set: 3,
            reps: '15,12,10',
            imgUrl: 'https://www.thethaothientruong.vn/uploads/2019/bai-tap-one-arm-dumbbell-row.jpg',
            videoUrl: ''
        },
        {
            name: 'Shoulder Press',
            set: 3,
            reps: '15,12,10',
            imgUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
            videoUrl: ''
        },
        {
            name: 'Pull Up',
            set: 3,
            reps: '15, 12, 10',
            imgUrl: 'https://www.fitboot.com/wp-content/uploads/2022/04/Pull-Up-1-1024x1024.png',
            videoUrl: ''
        },
        {
            name: 'Dumbbell Standing Triceps Extension',
            set: 3,
            reps: '15, 12, 10',
            imgUrl: 'https://gymvisual.com/10368-large_default/dumbbell-standing-triceps-extension-female.jpg',
            videoUrl: ''
        },
        {
            name: 'Dumbbell Curl',
            set: 3,
            reps: '15, 12, 10',
            imgUrl: 'data:image/jpeg;base64,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',
            videoUrl: ''
        }
    ]
    return (
        <div>
            <button className='p-5 rounded-full border-2 bg-blue-500 text-white w-full' onClick={handleOpen}>Ngày 3: Upper body</button>
            {day3Plan.map((plan) => {
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
