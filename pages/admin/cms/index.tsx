import { FormEvent, useEffect, useReducer, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { ICms, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import useImage from '@/hooks/useImage';
import Image from 'next/image';


const initialState: ICms = {
    _id: null,
    hero: {
        header: '',
        text: '',
    },
    whoWeAre: {
        text: '',
        image: '',
    },
    whatWeDo: {
        text: '',
        image: '',
    },
}

type IAction = 'hero' | 'whoWeAre' | 'whatWeDo' | 'update'

const EditCms = () => {
    const [loading, setLoading] = useState(false)
    const [cms, dispatch] = useReducer((state: ICms, action: IReducerAction<IAction>) => {
        if (action.type === 'update' && typeof action.payload !== 'string') {
            return { ...state, ...action.payload }
        }
        return { ...state, [action.type]: action.payload }
    }, initialState)
    const { url: heroImage, uploadImage, error: errorImage, progress, setError, loading: uploadingImage } = useImage()

    console.log({cms})

    const router = useRouter()
    const { loading: posting, error, data, post } = usePost({ 
        api: `/cms/${cms?._id || ''}`,
        method: 'PATCH',
        onSuccess: () => {
            toast('Updated successfully')
        }
    })

    const updateWhoWeAre = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            whoWeAre: cms.whoWeAre
        })
    }

    const updateWhatWeDo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            whatWeDo: cms.whatWeDo
        })
    }

    const updateHero = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            hero: cms.hero
        })
    }

    
    useEffect(() => {
        if (heroImage) {
            dispatch({ type: 'hero', payload: { ...cms.hero, image: heroImage } })
        }
    }, [heroImage])

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const res = await fetch(`/api/cms`)
            const data = await res.json()
            
            if (!res.ok) throw new Error(data.message)
    
            console.log({data})
            dispatch({ type: 'update', payload: data[0] })
          } catch (error) {
            console.log({error})
          }
            setLoading(false)  
        }
        fetchData()
      }, [])

    return (
        <AdminLayout>
        <Head>
            <title>Eraskorp</title>
            <meta name="description" content="Engine Pil Company" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(loading || posting || uploadingImage) && <Loader modalOpen={true} />}
        <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>

            <section className="pb-10 border-b">
                <h1 className='text-2xl text-black/70 font-argentinum mb-6'>Hero Section</h1>
                <form className="flex flex-col gap-4" onSubmit={updateHero}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="header" className="text-black/70">Header</label>
                        <input minLength={10} maxLength={45} required onChange={(e) => dispatch({ type: 'hero', payload: { ...cms.hero, header: e.target.value } })} value={cms?.hero?.header} type="text" name="header" id="header" className="border border-black/20 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">Text</label>
                        <textarea minLength={200} maxLength={450} rows={3} required onChange={(e) => dispatch({ type: 'hero', payload: {...cms.hero, text: e.target.value } })} value={cms?.hero?.text} name="text" id="text" className="border border-black/20 rounded-md p-2" />
                        {/* <input minLength={200} maxLength={300} required onChange={(e) => dispatch({ type: 'hero', payload: {...cms.hero, text: e.target.value } })} value={cms?.hero?.text} type="text" name="text" id="text" className="border border-black/20 rounded-md p-2" /> */}
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Update</Button>
                    </div>
                </form>
            </section>
            <section className="py-10 border-b">
                <h1 className='text-2xl text-black/70 font-argentinum mb-6'>Who We Are Section</h1>
                <form className="flex flex-col gap-4" onSubmit={updateWhoWeAre}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">Text</label>
                        <textarea minLength={200} maxLength={450} rows={3} required onChange={(e) => dispatch({ type: 'whoWeAre', payload: { ...cms.whoWeAre, text: e.target.value } })} value={cms?.whoWeAre?.text} name="text" id="text" className="border border-black/20 rounded-md p-2" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Update</Button>
                    </div>
                </form>
            </section>

            <section className="py-10 border-b">
                <h1 className='text-2xl text-black/70 font-argentinum mb-6'>What We Do Section</h1>
                <form className="flex flex-col gap-4" onSubmit={updateWhatWeDo}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">Text</label>
                        <textarea minLength={200} maxLength={450} rows={3} required onChange={(e) => dispatch({ type: 'whatWeDo', payload: { ...cms.whatWeDo, text: e.target.value } })} value={cms?.whatWeDo?.text} name="text" id="text" className="border border-black/20 rounded-md p-2" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Update</Button>
                    </div>
                </form>
            </section>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(EditCms)
// export default EditCms
